export const menus = [
  {
    id: "dashboard",
    path: "dashboard",
    file: "/src/views/app/dashboard/DashboardPage.tsx",
    icon: "bx bx-dashboard",
  },
  {
    id: "menu",
    path: "menu",
    file: "/src/views/app/menu/MenuPage.tsx",
    icon: "bx bxs-food-menu",
    children: [
      {
        id: "menu-add",
        path: "add",
        file: "/src/views/app/menu/AddPage.tsx",
      },
      {
        id: "menu-edit",
        path: "edit",
        file: "/src/views/app/menu/EditPage.tsx",
      },
    ],
  },
  {
    id: "user",
    path: "user",
    file: "/src/views/app/user/UserPage.tsx",
    icon: "bx bxs-user",
    children: [
      {
        id: "user-add",
        path: "add",
        file: "/src/views/app/user/children/AddPage.tsx",
      },
      {
        id: "user-edit",
        path: "edit",
        file: "/src/views/app/user/children/EditPage.tsx",
      },
    ],
  },
  {
    id: "setting",
    path: "setting",
    file: "/src/views/app/setting/UserPage.tsx",
    icon: "bx bxs-setting",
    children: [
      {
        id: "setting-add",
        path: "add",
        file: "/src/views/app/setting/children/AddPage.tsx",
      },
      {
        id: "setting-edit",
        path: "edit",
        file: "/src/views/app/setting/children/EditPage.tsx",
      },
    ],
  },
];
