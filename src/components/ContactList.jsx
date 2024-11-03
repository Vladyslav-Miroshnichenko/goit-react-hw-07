import React from "react";
import { useSelector } from "react-redux";

import Contact from "./Contact";
import { selectFilteredContacts } from "../redux/filtersSlice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
