import { Suspense } from "react";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { Contact } from "./api/contacts";
// The navigation.location will show up when the app is navigating to a new URL and loading the data for it.
// It then goes away when there is no pending navigation anymore.

const Root = () => {
  const contacts = useLoaderData() as Contact[];
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isLoading = () => navigation.state === "loading";
  const [searchParams, setSearchParams] = useSearchParams();
  const submit = useSubmit();
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("name");

  return (
    <>
      <Suspense fallback={<>suspense loading</>}>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                className={searching ? "loading" : ""}
                id="name"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="name"
                defaultValue={searchParams.get("name") || undefined}
                onChange={(e) => {
                  setSearchParams(e.currentTarget.value);
                  submit(e.currentTarget.form, {
                    replace: true,
                  });
                }}
              />
              <div id="search-spinner" aria-hidden hidden={!searching} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
            <button type="button" onClick={() => navigate("add")}>
              New
            </button>
          </div>
          <nav>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id} className="flex">
                  <Link to={`/contacts/${contact.id}`}>{contact.first}</Link>{" "}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div id="detail" className={isLoading() ? "loading" : ""}>
          <Outlet />
        </div>
      </Suspense>
    </>
  );
};
export default Root;
