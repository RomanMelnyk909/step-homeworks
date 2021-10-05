const initialState = {
  List: [],
  CurrentContact: ""
};

const ContactListReducer = (state = initialState, action) => {
  console.log("action payload", action.payload);
  switch (action.type) {
    case "GET_ALL_CONTACTS":
      return { ...state, List: action.payload };
    case "DELETE_CONTACT":
      return { ...state, List: action.payload };
    default:
      return state;
  }
  //   return state;
};

export default ContactListReducer;