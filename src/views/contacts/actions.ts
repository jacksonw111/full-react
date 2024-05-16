import { ActionFunctionArgs, redirect } from "react-router-dom";
import { contactService } from "./api/contacts";

/**
 * 
 * @param param0 
 * avatar: "https://api.dicebear.com/8.x/pixel-art/svg?seed=25",
    twitter: "AvaR_13",
    notes: "Passionate about social justice and activism",
    favorite: true,
 */
export const addContactAction = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const first = form.get("first") as string;
  const last = form.get("last") as string;
  const avatar =
    "https://api.dicebear.com/8.x/pixel-art/svg?seed=" +
    Math.floor(Math.random() * 10000);
  const twitter = form.get("twitter") as string;
  const notes = form.get("notes") as string;
  const favorite = false;
  await contactService.add({
    first,
    last,
    avatar,
    twitter,
    notes,
    favorite,
  });

  return redirect("/contacts");
};
