import { config } from "@/config";
import { useRouterGuard } from "@/router/hooks";
import { Outlet } from "react-router-dom";
import SideBar from "./_layout/SideBar";

const AppLayout = () => {
  const { loading } = useRouterGuard();
  if (loading && !config.loaded_menus) {
    return <>loading</>;
  }
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};
export default AppLayout;
