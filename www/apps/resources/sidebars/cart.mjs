/** @type {import('types').RawSidebarItem[]} */
export const cartSidebar = [
  {
    type: "category",
    title: "Cart Module",
    isChildSidebar: true,
    children: [
      {
        type: "link",
        path: "/commerce-modules/cart",
        title: "Overview",
      },
      {
        type: "link",
        path: "/commerce-modules/cart/examples",
        title: "Examples",
      },
      {
        type: "link",
        path: "/commerce-modules/cart/extend",
        title: "Extend Module",
      },
      {
        type: "sub-category",
        title: "Concepts",
        children: [
          {
            type: "link",
            path: "/commerce-modules/cart/concepts",
            title: "Cart Concepts",
          },
          {
            type: "link",
            path: "/commerce-modules/cart/promotions",
            title: "Promotion Adjustments",
          },
          {
            type: "link",
            path: "/commerce-modules/cart/tax-lines",
            title: "Tax Lines",
          },
          {
            type: "link",
            path: "/commerce-modules/cart/links-to-other-modules",
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
            path: "/commerce-modules/cart/events",
            title: "Events Reference",
          },
          {
            type: "link",
            path: "/references/cart",
            title: "Main Service Reference",
            isChildSidebar: true,
            childSidebarTitle: "Cart Module's Main Service Reference",
            children: [
              {
                type: "category",
                title: "Methods",
                autogenerate_path:
                  "/references/cart/ICartModuleService/methods",
              },
            ],
          },
          {
            type: "link",
            path: "/references/cart/models",
            title: "Data Models Reference",
            isChildSidebar: true,
            childSidebarTitle: "Cart Module Data Models Reference",
            children: [
              {
                type: "category",
                title: "Data Models",
                autogenerate_path: "/references/cart_models/variables",
              },
            ],
          },
        ],
      },
    ],
  },
]
