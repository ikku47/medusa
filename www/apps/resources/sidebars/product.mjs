/** @type {import('types').RawSidebarItem[]} */
export const productSidebar = [
  {
    type: "category",
    title: "Product Module",
    isChildSidebar: true,
    children: [
      {
        type: "link",
        path: "/commerce-modules/product",
        title: "Overview",
      },
      {
        type: "link",
        path: "/commerce-modules/product/examples",
        title: "Examples",
      },
      {
        type: "link",
        path: "/commerce-modules/product/extend",
        title: "Extend Module",
      },
      {
        type: "sub-category",
        title: "Concepts",
        children: [
          {
            type: "link",
            path: "/commerce-modules/product/links-to-other-modules",
            title: "Links to Other Modules",
          },
        ],
      },
      {
        type: "sub-category",
        title: "Guides",
        autogenerate_path: "/commerce-modules/product/guides",
      },
      {
        type: "sub-category",
        title: "References",
        children: [
          {
            type: "link",
            path: "/commerce-modules/product/events",
            title: "Events Reference",
          },
          {
            type: "link",
            path: "/references/product",
            title: "Main Service Reference",
            isChildSidebar: true,
            childSidebarTitle: "Product Module's Main Service Reference",
            children: [
              {
                type: "category",
                title: "Methods",
                autogenerate_path:
                  "/references/product/IProductModuleService/methods",
              },
            ],
          },
          {
            type: "link",
            path: "/references/product/models",
            title: "Data Models Reference",
            isChildSidebar: true,
            childSidebarTitle: "Product Module Data Models Reference",
            children: [
              {
                type: "category",
                title: "Data Models",
                hasTitleStyling: true,
                autogenerate_path: "/references/product_models/variables",
              },
            ],
          },
        ],
      },
    ],
  },
]
