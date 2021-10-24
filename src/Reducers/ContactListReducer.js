const initialState = {
  List: [],
  CurrentContact: "",
  dataLoad: false,
  search: "23",
};

const ContactListReducer = (state = initialState, action) => {

  switch (action.type) {
    case "UPDATE_CONTACT_LIST":
      return {
        ...state,
        List: action.payload,
      };
    case "GET_CURRENT_CONTACT":
      return {
        ...state,
        CurrentContact: action.payload,
      };
    case "IS_LOAD_DATA": {
      return {
        ...state,
        dataLoad: action.payload,
      };
    }
    case "search": {
      console.log("search is run");
      return {
        ...state,
        search: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ContactListReducer;
