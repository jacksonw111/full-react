import { motion } from "framer-motion";

const AnimationSubPage = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 2 }}
      className="w-10 h-10 bg-red-500"
    >
      test1
    </motion.div>
  );
};
export default AnimationSubPage;
