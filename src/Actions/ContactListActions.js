export const UpdateContactList = (ContactList) => {
  return {
    type: "UPDATE_CONTACT_LIST",
    payload: ContactList,
  };
};

export const GetCurrentContact = (currentContact) => {
  return {
    type: "GET_CURRENT_CONTACT",
    payload: currentContact,
  };
};

export const isLoadData = (isLoad) => {
  return {
    type: "IS_LOAD_DATA",
    payload: isLoad,
  };
};

export const changeSearch = (searchStr) => {
  return {
    type: "search",
    payload: searchStr,
  };
};
