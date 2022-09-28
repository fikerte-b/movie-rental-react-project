import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
//import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
//import proLogoImg from "../assets/proLogo.jpg";

const SignUp = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phonenumber: "",
    billingaddress: "",
    cardnumber: "",
    isAdmin: ""
    
  };
  const navigate = useNavigate();

  const [savePersonState, setSavePersonState] = useState(initialValues);

  const [formError, setformError] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  const onChangeField = (event) => {
    const copyState = { ...savePersonState };
    copyState[event.target.name] = event.target.value;
    setSavePersonState(copyState);
  };
  // const onChangeField = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;
  //   let copyState = Object.assign(savePersonState);
  //   copyState[name] = value;
  //   setSavePersonState(copyState);
  // };
  async function saveUser(user)  {
    try{
      await axios.post("http://localhost:8080/users/signup", user)
    } catch (err){
        alert(err)
    }
  };

  const onClicked = (e) => {
    e.preventDefault();
    console.log(savePersonState);
    const err = validate(savePersonState);
    setformError(err);
    //setformError(err);
    if (!err.firstname && !err.lastname && !err.password && !err.email && !err.role) {
      saveUser(savePersonState);
      navigate("/signin");
    } else {
      setIsSubmit(false);
    }
  };
  const validate = (value) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.firstname) {
      error.firstname = "First name is requried";
    }
    if (!value.lastname) {
     error.lastname = "Last name is required";
    }
    if (!value.email) {
      error.email = "E-mail is requried";
    // } else if (!regex.test(value.email)) {
    //   error.email = "This is not a valid email address!";
    }
    if (!value.password) {
      error.password = "Password is requried";
    } else if (value.password.length < 4) {
      error.password = "password must be more than 4 characters!";
    } else if (value.password.length > 10) {
      error.password = "password can't exceed more than 10 characters!";
    }
    if (!value.role) {
        error.role = "Role is required";
       }

    return error;
  };
  


  return (
    <div 
     >
      <div >
        <div>
          <h1 >Sign Up Form</h1>
          <div>
            <div >
              <label>First Name:</label>
              <input
                type="text"
                
                name="firstname"
                placeholder="First Name......"
                defaultValue={savePersonState.firstname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p style={{color: "red"}}>{formError.firstname}</p>
            </div>
            <div >
              <label>Last Name:</label>
              <input
                type="text"
              
                name="lastname"
                placeholder="Last Name...."
                defaultValue={savePersonState.lastname}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p style={{color: "red"}}>{formError.lastname}</p>
            </div>

            <div>
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email..."
                name="email"
                defaultValue={savePersonState.email}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p style={{color: "red"}}>{formError.email}</p>
            </div>
            
            <div>
              <label>Password:</label>
              <input
                type="password"
                id="inputPassword4"
                placeholder="Password"
                name="password"
                defaultValue={savePersonState.password}
                onChange={(event) => onChangeField(event)}
              ></input>
              {/* {formError&&<div className="validation">{formError}</div>} */}
              <p style={{color: "red"}}>{formError.password}</p>
            </div> 
            <div>
              <label>Phone Number:</label>
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone number...."
                onChange={(event) => onChangeField(event)}
              ></input>
              <br></br>
              {/* <p className="validation">{formError.city}</p> */}
            </div>
            <div>
              <label>Billing Address:</label>
              <input
                type="text"
                name="billingaddress"
                placeholder="please enter street, city, state and zip...."
                onChange={(event) => onChangeField(event)}
              ></input>
              <br></br>
              {/* <p className="validation">{formError.city}</p> */}
            </div>
            <div>
              <label>Card Number:</label>
              <input
                type="text"
                name="cardnumber"
                placeholder="card number...."
                onChange={(event) => onChangeField(event)}
              ></input>
              <br></br>
              {/* <p className="validation">{formError.city}</p> */}
            </div>
            <div>
              <label>Role:</label>
              <input
                type="role"
              
                id="roleId"
                placeholder="are you admin or user please enter true or false...."
                name="role"
                defaultValue={savePersonState.role}
                onChange={(event) => onChangeField(event)}
              ></input>
              <p style={{color: "red"}}>{formError.role}</p>
            </div>
          </div>
          <br></br>
          <button className="btn btn-primary" onClick={onClicked}>
            SignUp
          </button>
          {/* <div className="value">
            Already have an account? SignIn
            <Link to="/home/signin">here</Link>
          </div> */}
        </div>
        <br></br>
        {/* work on the logo to right later */}
        {/* <div className="form-group col-md-7 inputToright">
           <img className="img-fluid 100" src={proLogoImg} alt="logo" />
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
