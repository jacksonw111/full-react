import { addContactAction } from "@/views/contacts/actions";
import ContactAdd from "@/views/contacts/components/ContactAdd";
import ContactDetail from "@/views/contacts/components/ContactDetial";
import ContactIndex from "@/views/contacts/components/ContactIndex";
import ErrorPage from "@/views/contacts/components/Error";
import { contactLoader, rootLoader } from "@/views/contacts/loaders";
import Root from "@/views/contacts/Root";
import { createBrowserRouter } from "react-router-dom";

export const router = () =>
  createBrowserRouter([
    {
      path: "/contacts",
      errorElement: <ErrorPage />,
      Component: Root,
      loader: rootLoader,
      children: [
        {
          index: true,
          Component: ContactIndex,
        },
        {
          path: ":contactId",
          loader: contactLoader,
          Component: ContactDetail,
        },
        {
          path: "add",
          Component: ContactAdd,
          action: addContactAction,
        },
      ],
    },
  ]);
