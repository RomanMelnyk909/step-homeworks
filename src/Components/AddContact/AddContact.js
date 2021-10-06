import { Redirect, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { useState } from "react";

import API from "../ApiServices/ApiServices";

// Import styles
import "./AddContact.css";

import { addNewContact } from "../../Actions/ContactListActions";

const AddContact = ({ List, addContact }) => {
  const [contact, setContact] = useState({
    Id: uuidv4(),
    Name: "",
    Phone: "",
    Email: "",
    Gender: "",
    Status: "",
    Avatar: null,
    IsRedirect: false,
  });

  const onGetName = (name) => {
    setContact((prevState) => ({
      ...prevState,
      Name: name,
    }));
  };

  const onGetPhone = (phone) => {
    setContact((prevState) => ({
      ...prevState,
      Phone: phone,
    }));
  };

  const onGetEmail = (email) => {
    setContact((prevState) => ({
      ...prevState,
      Email: email,
    }));
  };

  const onGetGender = (gender) => {
    setContact((prevState) => ({
      ...prevState,
      Gender: gender,
    }));
  };

  const onGetStatus = (status) => {
    setContact((prevState) => ({
      ...prevState,
      Status: status,
    }));
  };

  const onGetAvatar = (avatar) => {
    setContact((prevState) => ({
      ...prevState,
      Avatar: avatar,
    }));
  };
  // let { Gender, Avatar } = contact;

  // if (Avatar === null || Avatar === "" || Gender === "") {
  //   setContact((prevState) => ({
  //     ...prevState,
  //     Avatar:
  //       "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg",
  //   }));
  // } else {
  //   setContact((prevState) => ({
  //     ...prevState,
  //     Avatar: `https://api.randomuser.me/portraits/${Gender}/${Avatar}.jpg`,
  //   }));
  // }

  const onCreateContact = (e) => {
    e.preventDefault();

    addNewContact([contact, ...List]);
    API.updateDatabase([contact, ...List]);
    console.log("List", [contact, ...List]);
  };
  console.log("List", List);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <form onSubmit={onCreateContact}>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Name</label>
              <input
                required
                type="text"
                className="form-control"
                name="Name"
                onChange={(e) => {
                  onGetName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Phone</label>
              <input
                required
                type="tel"
                className="form-control"
                name="Phone"
                onChange={(e) => {
                  onGetPhone(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email1">Email address</label>
              <input
                required
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="Email"
                onChange={(e) => {
                  onGetEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Status</label>
              <select
                className="form-control"
                onChange={(e) => {
                  onGetStatus(e.target.value);
                }}
              >
                <option defaultValue>Choose...</option>
                <option value="Work">Work</option>
                <option value="Family">Family</option>
                <option value="Private">Private</option>
                <option value="Friends">Friends</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Gender</label>
              <select
                className="form-control"
                onChange={(e) => {
                  onGetGender(e.target.value);
                }}
              >
                <option defaultValue>Choose...</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="Avatar">Avatar</label>
              <input
                required
                type="number"
                min="0"
                max="99"
                name="Avatar"
                onChange={(e) => {
                  onGetAvatar(e.target.value);
                }}
                className="form-control"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add new contact
            </button>
            <Link to="/" className="btn btn-primary edit-back">
              Back
            </Link>
          </form>
        </div>
        <div className="col-4">
          <img src="" className="img-thumbnail avatar" alt="..." />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ ContactListReducer }) => {
  const { List } = ContactListReducer;
  return { List };
};

const mapDispatchToProps = {
  addNewContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
