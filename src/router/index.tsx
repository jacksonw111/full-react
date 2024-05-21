import AnimationLayout from "@/views/animation/AnimationLayout";
import AnimationPage from "@/views/animation/AnimationPage";
import AnimationSub2 from "@/views/animation/AnimationSub2";
import AnimationSubPage from "@/views/animation/AnimationSubPage";
import AppLayout from "@/views/app/AppLayout";
import {
  addContactAction,
  destoryContactAction,
  favoriteAction,
  updateContactAction,
} from "@/views/contacts/actions";
import ContactAdd from "@/views/contacts/components/ContactAdd";
import ContactDetail from "@/views/contacts/components/ContactDetial";
import EditContact from "@/views/contacts/components/ContactEdit";
import ErrorPage from "@/views/contacts/components/Error";
import { contactLoader, rootLoader } from "@/views/contacts/loaders";
import Root from "@/views/contacts/Root";
import LoginPage from "@/views/login/LoginPage";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const createRouter = () =>
  createBrowserRouter([
    {
      path: "/contacts",
      errorElement: <ErrorPage />,
      Component: Root,
      loader: rootLoader,
      children: [
        {
          index: true,
          Component: lazy(
            () => import("@/views/contacts/components/ContactIndex")
          ),
        },
        {
          path: ":contactId",
          loader: contactLoader,
          Component: ContactDetail,
          action: favoriteAction,
        },
        {
          path: "add",
          Component: ContactAdd,
          action: addContactAction,
        },
        {
          path: ":contactId/edit",
          Component: EditContact,
          loader: contactLoader,
          action: updateContactAction,
        },
        {
          path: ":contactId/destroy",
          action: destoryContactAction,
        },
      ],
    },

    {
      path: "/login",
      Component: LoginPage,
    },
    {
      path: "/animation",
      Component: AnimationLayout,
      children: [
        {
          index: true,
          Component: AnimationPage,
        },
        {
          path: "sub",
          Component: AnimationSubPage,
        },
        {
          path: "sub2",
          Component: AnimationSub2,
        },
      ],
    },
    {
      path: "*",
      Component: AppLayout,
    },
  ]);

export const router = createRouter();
