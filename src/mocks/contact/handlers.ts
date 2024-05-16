import { Contact } from "@/views/contacts/api/contacts";
import { HttpResponse, http } from "msw";
import { contacts } from "./data";

export const contact_handlers = [
  http.get("/contacts", async () => {
    return HttpResponse.json(contacts, { status: 200 });
  }),
  http.get("/contacts/:id", async ({ params }) => {
    const id = params["id"];
    return HttpResponse.json(
      contacts.find((it) => it.id === Number(id)),
      { status: 200 }
    );
  }),
  http.post("/contacts", async ({ request }) => {
    contacts.push({
      id: contacts.length + 1,
      ...((await request.json()) as Contact),
    });
    return HttpResponse.json(contacts, { status: 201 });
  }),
];
