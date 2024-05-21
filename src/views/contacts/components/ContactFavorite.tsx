import { useFetcher } from "react-router-dom";
import { Contact } from "../api/contacts";

const ContactFavorite = ({ contact }: { contact: Contact }) => {
  const fetcher = useFetcher();
  const favorite = contact.favorite;
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};
export default ContactFavorite;
