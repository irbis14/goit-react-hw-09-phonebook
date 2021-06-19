const ContactsItem = ({ items }) => {
  return items.map((item) => {
    return (
      <li key={item.id}>
        {item.name}: {item.number}
      </li>
    );
  });
};

export default ContactsItem;
