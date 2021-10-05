export const getAllContacts = contactList => {
  return {
    type: "GET_ALL_CONTACTS",
    payload: contactList
  };
};

export const deleteContact = (contactList) => {
    return {
        type:"DELETE_CONTACT",
        payload: contactList
    }
}
