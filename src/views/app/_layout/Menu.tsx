export type MenuProps = {
  id: string;
  icon?: string;
  path: string;
  children?: MenuProps[];
};

import classNames from "classnames";
import { useState } from "react";

const Menu = ({ menu }: { menu: MenuProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="flex">
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer border border-red-700"
        >
          <div></div>
          <div>menu name</div>
        </div>
        <div
          className={classNames(
            open ? "rotate-90" : "rotate-0",
            "transition-all duration-100 ease-linear"
          )}
        >
          {">"}
        </div>
      </div>
      {menu.children && (
        <ul className={classNames(open ? "visible" : "hidden")}>
          <li>sub1</li>
          <li>sub1</li>
          <li>sub1</li>
          <li>sub1</li>
        </ul>
      )}
    </div>
  );
};
export default Menu;
