import { menu_service } from "@/api/menu";
import { config } from "@/config";
import AppLayout from "@/views/app/AppLayout";
import NotFound from "@/views/error/NotFound";
import { useEffect, useState } from "react";
import { DataRouteObject } from "react-router-dom";
import { router } from ".";
import { getRoutes } from "./utils";

export const useRouterGuard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(config.loaded_menus);

    if (config.loaded_menus) {
      setLoading(false);
      console.log(router.routes);
      return;
    }

    menu_service.get().then((res) => {
      const dynamic_routes = getRoutes(res);
      console.log(dynamic_routes);
      const indexRoute: DataRouteObject = {
        id: "index",
        path: "/",
        Component: AppLayout,
        children: dynamic_routes,
      };
      console.log(indexRoute);
      router.routes.push(indexRoute);

      const index = router.routes.findIndex((route) => route.id === "*");
      router.routes.splice(index - 1, 1, {
        id: "*",
        path: "*",
        Component: NotFound,
      } as DataRouteObject);

      config.loaded_menus = true;

      router.navigate(`${location.pathname}${location.search}`, {
        replace: true,
      });

      setLoading(false);
      console.log(router.routes);
    });
  }, []);

  return { loading };
};
