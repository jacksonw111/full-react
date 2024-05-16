import { Suspense } from "react";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { Contact } from "./api/contacts";

const Root = () => {
  const contacts = useLoaderData() as Contact[];
  const navigate = useNavigate();
  return (
    <>
      <Suspense fallback={<>loading</>}>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <button type="button" onClick={() => navigate("add")}>
              New
            </button>
          </div>
          <nav>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`/contacts/${contact.id}`}>{contact.first}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
export default Root;
