import { Form } from "react-router-dom";
import { Contact } from "../api/contacts";

const ContactFavorite = ({ contact }: { contact: Contact }) => {
  const favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};
export default ContactFavorite;
