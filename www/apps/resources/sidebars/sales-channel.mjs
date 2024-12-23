/** @type {import('types').RawSidebarItem[]} */
export const salesChannelSidebar = [
  {
    type: "category",
    title: "Sales Channel Module",
    isChildSidebar: true,
    children: [
      {
        type: "link",
        path: "/commerce-modules/sales-channel",
        title: "Overview",
      },
      {
        type: "link",
        path: "/commerce-modules/sales-channel/examples",
        title: "Examples",
      },
      {
        type: "sub-category",
        title: "Concepts",
        children: [
          {
            type: "link",
            path: "/commerce-modules/sales-channel/publishable-api-keys",
            title: "Publishable API Keys",
          },
          {
            type: "link",
            path: "/commerce-modules/sales-channel/links-to-other-modules",
            title: "Links to Modules",
          },
        ],
      },
      {
        type: "sub-category",
        title: "References",
        children: [
          {
            type: "link",
            path: "/commerce-modules/sales-channel/events",
            title: "Events Reference",
          },
          {
            type: "link",
            path: "/references/sales-channel",
            title: "Main Service Reference",
            isChildSidebar: true,
            childSidebarTitle: "Sales Channel Module's Main Service Reference",
            children: [
              {
                type: "category",
                title: "Methods",
                autogenerate_path:
                  "/references/sales_channel/ISalesChannelModuleService/methods",
              },
            ],
          },
          {
            type: "link",
            path: "/references/sales-channel/models",
            title: "Data Models Reference",
            isChildSidebar: true,
            childSidebarTitle: "Sales Channel Module Data Models Reference",
            children: [
              {
                type: "category",
                title: "Data Models",
                autogenerate_path: "/references/sales_channel_models/variables",
              },
            ],
          },
        ],
      },
    ],
  },
]
