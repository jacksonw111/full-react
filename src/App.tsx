import { RouterProvider } from "react-router-dom";
import { router } from "./router";

function App() {
  // const routers = useMemo(() => router, []);
  return (
    <RouterProvider router={router()} fallbackElement={<p>Initial Load...</p>} />
  );
}

export default App;
