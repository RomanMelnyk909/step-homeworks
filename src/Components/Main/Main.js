import ContactList from "./ContactList/ContactList";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeSearch } from "../../Actions/ContactListActions";

const Main = ({ search }) => {
  console.log(search);
  return (
    <div className="container bootstrap snippets bootdeys bootdey">
      <div className="row decor-default">
        <SideBar />

        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="contacts-list">
            <Link to="/new-contact" className="title">
              Add Contact
            </Link>

            <form
              className="ac-custom ac-checkbox ac-checkmark"
              autoComplete="off"
            >
              <div className="input-group">
                <input
                  type="text"
                  className="contacts-list-search"
                  placeholder="Search"
                  onChange={(e) => {
                    changeSearch(e.target.value);
                  }}
                />
              </div>
              <div className="unit head">
                <div className="field name">
                  <div className="check">
                    <input id="cb1" name="cb1" type="checkbox" />
                    <label htmlFor="cb1"></label>
                    <svg
                      viewBox="0 0 100 100"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </div>
                  Name
                </div>
                <div className="field phone">Phone</div>
              </div>
              <ContactList />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { search } = ContactListReducer;
  return { search };
};

const mapDispatchToProps = {
  changeSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
