/** @type {import('types').RawSidebarItem[]} */
export const regionSidebar = [
  {
    type: "category",
    title: "Region Module",
    isChildSidebar: true,
    children: [
      {
        type: "link",
        path: "/commerce-modules/region",
        title: "Overview",
      },
      {
        type: "link",
        path: "/commerce-modules/region/examples",
        title: "Examples",
      },
      {
        type: "sub-category",
        title: "Concepts",
        children: [
          {
            type: "link",
            path: "/commerce-modules/region/links-to-other-modules",
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
            path: "/commerce-modules/region/events",
            title: "Events Reference",
          },
          {
            type: "link",
            path: "/references/region",
            title: "Main Service Reference",
            isChildSidebar: true,
            childSidebarTitle: "Region Module's Main Service Reference",
            children: [
              {
                type: "category",
                title: "Methods",
                autogenerate_path:
                  "/references/region/IRegionModuleService/methods",
              },
            ],
          },
          {
            type: "link",
            path: "/references/region/models",
            title: "Data Models Reference",
            isChildSidebar: true,
            childSidebarTitle: "Region Module Data Models Reference",
            children: [
              {
                type: "category",
                title: "Data Models",
                autogenerate_path: "/references/region_models/variables",
              },
            ],
          },
        ],
      },
    ],
  },
]
