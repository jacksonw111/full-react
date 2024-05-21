import { motion } from "framer-motion";

const AnimationSub2 = () => {
  return (
    <div className="bg-blue-300 w-full h-full">
      <motion.div
        className="w-full h-full bg-blue-600"
        whileHover={{ scale: 0.5, rotate: 5, opacity: 0.7 }}
      >
        x
      </motion.div>
    </div>
  );
};
export default AnimationSub2;
