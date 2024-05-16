import { setupWorker } from "msw/browser";
import { contact_handlers } from "./contact/handlers";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers, ...contact_handlers);
