import { LoaderFunctionArgs } from "react-router-dom";
import { contactService } from "./api/contacts";

export const rootLoader = async () => {
  const data = await contactService.all();
  console.log(data);
  return data;
};

export const contactLoader = async ({ params }: LoaderFunctionArgs) => {
  const id = params["contactId"];
  console.log(id);
  return await contactService.get(Number(id));
};
