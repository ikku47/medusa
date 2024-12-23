/** @type {import('types').RawSidebarItem[]} */
export const orderSidebar = [
  {
    type: "category",
    title: "Order Module",
    isChildSidebar: true,
    children: [
      {
        type: "link",
        path: "/commerce-modules/order",
        title: "Overview",
      },
      {
        type: "sub-category",
        title: "Concepts",
        children: [
          {
            type: "link",
            path: "/commerce-modules/order/concepts",
            title: "Order Concepts",
          },
          {
            type: "link",
            path: "/commerce-modules/order/promotion-adjustments",
            title: "Promotions Adjustments",
          },
          {
            type: "link",
            path: "/commerce-modules/order/tax-lines",
            title: "Tax Lines",
          },
          {
            type: "link",
            path: "/commerce-modules/order/transactions",
            title: "Transactions",
          },
          {
            type: "link",
            path: "/commerce-modules/order/order-versioning",
            title: "Order Versioning",
          },
          {
            type: "link",
            path: "/commerce-modules/order/return",
            title: "Return",
          },
          {
            type: "link",
            path: "/commerce-modules/order/exchange",
            title: "Exchange",
          },
          {
            type: "link",
            path: "/commerce-modules/order/claim",
            title: "Claim",
          },
          {
            type: "link",
            path: "/commerce-modules/order/edit",
            title: "Order Edit",
          },
          {
            type: "link",
            path: "/commerce-modules/order/order-change",
            title: "Order Change",
          },
          {
            type: "link",
            path: "/commerce-modules/order/links-to-other-modules",
            title: "Links to Other Modules",
          },
        ],
      },
      {
        type: "sub-category",
        title: "References",
        children: [
          {
            type: "link",
            path: "/commerce-modules/order/events",
            title: "Events Reference",
          },
          {
            type: "link",
            path: "/references/order",
            title: "Main Service Reference",
            isChildSidebar: true,
            childSidebarTitle: "Order Module's Main Service Reference",
            children: [
              {
                type: "category",
                title: "Methods",
                autogenerate_path:
                  "/references/order/IOrderModuleService/methods",
              },
            ],
          },
          {
            type: "link",
            path: "/references/order/models",
            title: "Data Models Reference",
            isChildSidebar: true,
            childSidebarTitle: "Order Module Data Models Reference",
            children: [
              {
                type: "category",
                title: "Data Models",
                hasTitleStyling: true,
                autogenerate_path: "/references/order_models/classes",
              },
            ],
          },
        ],
      },
    ],
  },
]
