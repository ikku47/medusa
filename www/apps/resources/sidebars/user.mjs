/** @type {import('types').RawSidebarItem[]} */
export const userSidebar = [
  {
    type: "category",
    title: "User Module",
    isChildSidebar: true,
    children: [
      {
        type: "link",
        path: "/commerce-modules/user",
        title: "Overview",
      },
      {
        type: "link",
        path: "/commerce-modules/user/module-options",
        title: "Module Options",
      },
      {
        type: "link",
        path: "/commerce-modules/user/examples",
        title: "Examples",
      },
      {
        type: "sub-category",
        title: "Guides",
        children: [
          {
            type: "link",
            path: "/commerce-modules/user/user-creation-flows",
            title: "User Creation Flows",
          },
        ],
      },
      {
        type: "sub-category",
        title: "References",
        children: [
          {
            type: "link",
            path: "/commerce-modules/user/events",
            title: "Events Reference",
          },
          {
            type: "link",
            path: "/references/user",
            title: "Main Service Reference",
            isChildSidebar: true,
            childSidebarTitle: "User Module's Main Service Reference",
            children: [
              {
                type: "category",
                title: "Methods",
                autogenerate_path:
                  "/references/user/IUserModuleService/methods",
              },
            ],
          },
          {
            type: "link",
            path: "/references/user/models",
            title: "Data Models Reference",
            isChildSidebar: true,
            childSidebarTitle: "User Module Data Models Reference",
            children: [
              {
                type: "category",
                title: "Data Models",
                hasTitleStyling: true,
                autogenerate_path: "/references/user_models/variables",
              },
            ],
          },
        ],
      },
    ],
  },
]
