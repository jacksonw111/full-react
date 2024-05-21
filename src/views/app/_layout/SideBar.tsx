import classNames from "classnames";
import Menu, { MenuProps } from "./Menu";

const SideBar = () => {
  const menu: MenuProps = {
    id: "",
    path: "",
    icon: "",
  };
  return (
    <div className={classNames("")}>
      <Menu menu={menu} />
    </div>
  );
};
export default SideBar;
