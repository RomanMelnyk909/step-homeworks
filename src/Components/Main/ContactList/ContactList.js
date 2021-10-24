import { useEffect } from "react";
import ContactItem from "./ContactItem/ContactItem";
import { connect } from "react-redux";
import API from "../../../Services/APIService";
// Import Actions
import {
  UpdateContactList,
  isLoadData,
  search,
} from "../../../Actions/ContactListActions";

import loader from "./loader.gif";

const ContactList = ({
  List,
  dataLoad,
  UpdateContactList,
  isLoadData,
  search,
}) => {
  useEffect(() => {
    API.GetContactList()
      .then((data) => {
        UpdateContactList(data);
      })
      .then(() => {
        isLoadData(true);
      });
  }, []);

  let searchList = List.filter(
    (contact) => contact.Name.toLowerCase().indexOf(search.toLowerCase()) > -1
  );
  
  const contacts = searchList.map((item) => {
    return <ContactItem key={item.Id} {...item} />;
  });

  
  return (
    <section>
      {!dataLoad && (
        <div className="loader">
          <img className="loader-img" src={loader} alt="" />
        </div>
      )}
      {contacts.length > 0 ? (
        contacts
      ) : (
        <p className="emptyList">
          <img src="./loader.gif" alt="" />
          Contact list is empty!
        </p>
      )}
    </section>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { List, dataLoad, search } = ContactListReducer;
  return { List, dataLoad, search };
};

const mapDispatchToProps = {
  UpdateContactList,
  isLoadData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
