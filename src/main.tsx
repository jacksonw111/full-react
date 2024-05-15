import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { worker } from "./mocks/browser";

async function start() {
  if (import.meta.env.VITE_PROJECT_ENV === "dev") {
    console.log("start");
    await worker.start({ onUnhandledRequest: "bypass" });
  }
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <>
      <App />
    </>
  );
}

start();
