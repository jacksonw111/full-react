import { setupWorker } from "msw/browser";
import { contact_handlers } from "./contact/handlers";
import { handlers } from "./handlers";
import { menu_handlers } from "./menu/handlers";

export const worker = setupWorker(...handlers, ...contact_handlers, ...menu_handlers);
