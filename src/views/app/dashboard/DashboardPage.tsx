import { m } from "framer-motion";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <m.div
      className="w-full h-screen bg-yellow-400"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      dashboard
      <Link to="/user">user</Link>
    </m.div>
  );
};
export default DashboardPage;
