import { OrderDTO, OrderWorkflow } from "@medusajs/framework/types"
import {
  WorkflowData,
  WorkflowResponse,
  createStep,
  createWorkflow,
  transform,
} from "@medusajs/framework/workflows-sdk"
import {
  OrderPreviewDTO,
  RegisterOrderChangeDTO,
  UpdateOrderDTO,
} from "@medusajs/types"
import { MedusaError, OrderWorkflowEvents } from "@medusajs/framework/utils"

import { throwIfOrderIsCancelled } from "../utils/order-validation"
import {
  previewOrderChangeStep,
  registerOrderChangesStep,
  updateOrdersStep,
} from "../steps"
import { emitEventStep, useQueryGraphStep } from "../../common"

/**
 * This step validates that an order can be updated with provided input.
 */
export const updateOrderValidationStep = createStep(
  "update-order-validation",
  async function ({
    order,
    input,
  }: {
    order: OrderDTO
    input: OrderWorkflow.UpdateOrderWorkflowInput
  }) {
    throwIfOrderIsCancelled({ order })

    if (
      input.shipping_address?.country_code &&
      order.shipping_address?.country_code !==
        input.shipping_address?.country_code
    ) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Country code cannot be changed"
      )
    }
  }
)

export const updateOrderWorkflowId = "update-order-workflow"
/**
 * Update order workflow.
 */
export const updateOrderWorkflow = createWorkflow(
  updateOrderWorkflowId,
  function (
    input: WorkflowData<OrderWorkflow.UpdateOrderWorkflowInput>
  ): WorkflowResponse<OrderPreviewDTO> {
    const orderQuery = useQueryGraphStep({
      entity: "order",
      fields: [
        "id",
        "status",
        "email",
        "shipping_address.*",
        "billing_address.*",
      ],
      filters: { id: input.id },
      options: { throwIfKeyNotFound: true },
    }).config({ name: "order-query" })

    const order = transform(
      { orderQuery },
      ({ orderQuery }) => orderQuery.data[0]
    )

    updateOrderValidationStep({ order, input })

    const updateInput = transform({ input, order }, ({ input, order }) => {
      const update: UpdateOrderDTO = {}

      if (input.shipping_address) {
        const address = {
          // we want to create a new address
          ...order.shipping_address,
          ...input.shipping_address,
        }
        delete address.id
        update.shipping_address = address
      }

      return update
    })

    updateOrdersStep({
      selector: { id: input.id },
      update: updateInput,
    })

    const orderChangeInput = transform({ input, order }, ({ input, order }) => {
      const changes: RegisterOrderChangeDTO[] = []
      if (input.shipping_address) {
        changes.push({
          change_type: "update_order" as const,
          order_id: input.id,
          reference: "shipping_address",
          reference_id: order.shipping_address?.id, // save previous address id as reference
          details: input.shipping_address as Record<string, unknown>, // save what changed on the address
        })
      }

      return changes
    })

    registerOrderChangesStep(orderChangeInput)

    emitEventStep({
      eventName: OrderWorkflowEvents.UPDATED,
      data: { id: input.id },
    })

    return new WorkflowResponse(previewOrderChangeStep(input.id))
  }
)
