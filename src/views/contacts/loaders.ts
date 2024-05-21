import { LoaderFunctionArgs } from "react-router-dom";
import { contactService } from "./api/contacts";

export const rootLoader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const name = searchParams.get("name") as string;

  const data = await contactService.all({ name });
  console.log(data);
  return data;
};

export const contactLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params["contactId"];
  console.log(id);
  return await contactService.get(Number(id));
};
