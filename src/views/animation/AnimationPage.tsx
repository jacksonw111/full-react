import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimationPage = () => {
  return (
    <ul className="flex flex-col gap-3">
      <motion.li
        className="w-10 h-10 bg-red-500"
        exit={{ scale: 2, opacity: 0 }}
      >
        <Link to="sub">test1</Link>
      </motion.li>

      <li className="w-10 h-10 bg-red-500">
        <Link to="sub2">test1</Link>
      </li>
      <li className="w-10 h-10 bg-red-500">test1</li>
      <li className="w-10 h-10 bg-red-500">test1</li>
      <li className="w-10 h-10 bg-red-500">test1</li>
      <li className="w-10 h-10 bg-red-500">test1</li>
    </ul>
  );
};
export default AnimationPage;
