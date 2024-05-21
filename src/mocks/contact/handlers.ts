import { Contact } from "@/views/contacts/api/contacts";
import { HttpResponse, delay, http } from "msw";
import { contacts } from "./data";

export const contact_handlers = [
  http.get("/contacts", async ({ request }) => {
    await delay(3000)
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const name = searchParams.get("name") as string;
    if (name)
      return HttpResponse.json(
        contacts.filter((it) => it.first == name),
        { status: 200 }
      );
    else {
      return HttpResponse.json(contacts, { status: 200 });
    }
  }),

  http.delete("/contacts/:id", async ({ params }) => {
    return HttpResponse.json(
      contacts.filter((it) => it.id !== Number(params.id)),
      {
        status: 200,
      }
    );
  }),

  http.get("/contacts/:id", async ({ params }) => {
    const id = params["id"];
    await delay(3000);
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
  http.put("/contacts", async ({ request }) => {
    const contact = (await request.json()) as Contact;
    contacts.map((it) => {
      if (it.id === contact.id) return contact;
    });

    return HttpResponse.json(contacts, { status: 201 });
  }),
];
