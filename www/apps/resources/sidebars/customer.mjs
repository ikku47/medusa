/** @type {import('types').RawSidebarItem[]} */
export const customerSidebar = [
  {
    type: "category",
    title: "Customer Module",
    isChildSidebar: true,
    children: [
      {
        type: "link",
        path: "/commerce-modules/customer",
        title: "Overview",
      },
      {
        type: "link",
        path: "/commerce-modules/customer/examples",
        title: "Examples",
      },
      {
        type: "link",
        path: "/commerce-modules/customer/extend",
        title: "Extend Module",
      },
      {
        type: "sub-category",
        title: "Concepts",
        children: [
          {
            type: "link",
            path: "/commerce-modules/customer/customer-accounts",
            title: "Customer Accounts",
          },
        ],
      },
      {
        type: "sub-category",
        title: "References",
        children: [
          {
            type: "link",
            path: "/commerce-modules/customer/events",
            title: "Events Reference",
          },
          {
            type: "link",
            path: "/references/customer",
            title: "Main Service Reference",
            isChildSidebar: true,
            childSidebarTitle: "Customer Module's Main Service Reference",
            children: [
              {
                type: "category",
                title: "Methods",
                autogenerate_path:
                  "/references/customer/ICustomerModuleService/methods",
              },
            ],
          },
          {
            type: "link",
            path: "/references/customer/models",
            title: "Data Models Reference",
            isChildSidebar: true,
            childSidebarTitle: "Customer Module Data Models Reference",
            children: [
              {
                type: "category",
                title: "Data Models",
                autogenerate_path: "/references/customer_models/variables",
              },
            ],
          },
        ],
      },
    ],
  },
]
