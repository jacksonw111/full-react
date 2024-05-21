import { HttpResponse, http } from "msw";
import { menus } from "./data";

export const menu_handlers = [
  http.get("/api/menus", async () => {
    return HttpResponse.json(menus, { status: 200 });
  }),
];
