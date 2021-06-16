import { v4 as uuidv4 } from "uuid";

const ContactsItem = ({ items }) => {
  return items.map((item) => {
    const id = uuidv4();
    return <li key={id}>{item.name}</li>;
  });
};

export default ContactsItem;
