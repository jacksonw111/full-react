import api from "@/libs/http";

export interface AppRoute {
  id: string;
  path: string;
  file: string;
  icon: string;
  children: AppRoute[];
}

class MenuService {
  url = "/api/menus";
  async get(): Promise<AppRoute[]> {
    const { data } = await api.get(this.url);
    return data;
  }
}

export const menu_service = new MenuService();
