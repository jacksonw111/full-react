import { ActionFunctionArgs, redirect } from "react-router-dom";
import { contactService } from "./api/contacts";

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
  // 必须返回点什么，不然会报错
  return redirect("/contacts");
};

export const updateContactAction = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  const form = await request.formData();
  const first = form.get("first") as string;
  const last = form.get("last") as string;
  const avatar =
    "https://api.dicebear.com/8.x/pixel-art/svg?seed=" +
    Math.floor(Math.random() * 10000);
  const twitter = form.get("twitter") as string;
  const notes = form.get("notes") as string;
  const favorite = false;
  await contactService.update({
    id: Number(params.contactId),
    first,
    last,
    avatar,
    twitter,
    notes,
    favorite,
  });
  // 必须返回点什么，不然会报错
  return redirect("/contacts/" + params.contactId);
};

export const destoryContactAction = async ({ params }: ActionFunctionArgs) => {
  await contactService.remove(Number(params.contactId));
  return redirect(`/contacts`);
};

export const favoriteAction = async () => {
  console.log("favorite action");
  return null;
};
