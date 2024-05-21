import { AnimatePresence } from "framer-motion";
import { RouterProvider } from "react-router-dom";
import MotionLazy from "./components/motion-lazy";
import { router } from "./router";

function App() {
  // const routers = useMemo(() => router, []);
  return (
    <AnimatePresence>
      <MotionLazy>
        <RouterProvider
          router={router}
          fallbackElement={<p>react router Initial Load...</p>}
        />
      </MotionLazy>
    </AnimatePresence>
  );
}

export default App;
