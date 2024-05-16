import { Form } from "react-router-dom";

const ContactAdd = () => (
  <Form method="post" id="contact-form">
    <p>
      <span>Name</span>
      <input
        placeholder="First"
        aria-label="First name"
        type="text"
        name="first"
      />
      <input
        placeholder="Last"
        aria-label="Last name"
        type="text"
        name="last"
      />
    </p>
    <label>
      <span>Twitter</span>
      <input type="text" name="twitter" placeholder="@jack" />
    </label>

    <label>
      <span>Notes</span>
      <textarea name="notes" rows={6} />
    </label>
    <p>
      <button type="submit">Save</button>
      <button type="button">Cancel</button>
    </p>
  </Form>
);
export default ContactAdd;
