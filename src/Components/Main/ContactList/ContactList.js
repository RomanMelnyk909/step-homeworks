import ContactItem from "./ContactItem/ContactItem";
import { connect } from "react-redux";
import { useEffect } from "react";
import API from "../../ApiServices/ApiServices";

//import actions

import { getAllContacts } from "../../../Actions/ContactListActions";

const ContactList = ({ List, getAllContacts }) => {

  useEffect(() => {
    API.getContactList().then(data => {
      getAllContacts(data);
    });
  }, []);

  const contact = List.map(item => {
    return <ContactItem key={item.Id} {...item} />;
  });

  return (
    <section>
      {contact.length > 0 ? (
        contact
      ) : (
        <p className="emptyList">Contact list is empty!</p>
      )}
    </section>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { List } = ContactListReducer;
  return { List };
};

const mapDispatchToprops = {
  getAllContacts
};

export default connect(mapStateToProps, mapDispatchToprops)(ContactList);
