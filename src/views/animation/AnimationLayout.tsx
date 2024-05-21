import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const AnimationLayout = () => {
  return (
    <motion.div className="w-screen h-screen bg-yellow-500 p-10 ">
      <Outlet />
    </motion.div>
  );
};
export default AnimationLayout;
