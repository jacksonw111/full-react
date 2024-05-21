import { AppRoute } from "@/api/menu";
import { ComponentType, lazy } from "react";
import { DataRouteObject } from "react-router-dom";

const modules = import.meta.glob([
  "@/views/app/*/*Page.tsx",
  "@/views/app/*/children/*Page.tsx",
]);

const components = Object.keys(modules).reduce<Record<string, unknown>>(
  (pre, cur) => {
    pre[cur] = modules[cur];
    return pre;
  },
  {}
);

export function getRoutes(app_routes: AppRoute[]): DataRouteObject[] {
  const routes: DataRouteObject[] = [];
  for (const index in app_routes) {
    routes.push(getRoute(app_routes[index]));
  }
  return routes;
}

const getRoute = (route: AppRoute) => {
  return route.children
    ? {
        id: route.id,
        path: route.path,
        children: [
          {
            id: route.id + "index",
            index: true,
            Component: lazy(
              components[route.file] as () => Promise<{
                default: ComponentType<unknown>;
              }>
            ),
          },
          ...getRoutes(route.children),
        ],
      }
    : {
        id: route.id,
        path: route.path,
        Component: lazy(
          components[route.file] as () => Promise<{
            default: ComponentType<unknown>;
          }>
        ),
      };
};
