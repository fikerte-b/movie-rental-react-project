import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
function Login() {
    const intialValue = {
        email: undefined,
        password: undefined
    }
    const [loginUser, setLoginUser] = useState(intialValue)
    const { user, loading, dispatch, error } = useContext(AuthContext);
    const navigate = useNavigate();

    
    const onChangeHandler = (event)=>{
        setLoginUser((prev)=>({...prev, [event.target.id]: event.target.value}));
     console.log(loginUser, "loginin user onchange....");
    }
    const onClickSignupHandler=(event)=>{
        navigate("/signup")
    }
  
    // sending to backend
   const onClickHandler = async (event)=>{
    event.preventDefault();
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post('http://localhost:8080/login', loginUser)
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
        if(user.isAdmin === false){
        navigate("/")
    }else{
        navigate("/admin")
    }
        // <Link to="/">here</Link>
    }catch(err){
        dispatch({type: "LOGIN_FAILURE", payload: err.response.data})
    }
   }
    
    console.log(user);
    
    
    
    
    return ( 
    <div className="login">
        <div>
        <h4>Well Come to Endeset Online Movie Rentals!</h4>
        <h4>Where you find your favaourite shows with various price options...</h4>
        </div>
        <div className="loginContainer">
            
            <h3>Sign In</h3>
            <input type="text" placeholder="email" id="email" onChange={onChangeHandler} className="loginInput" />
            <input type="text" placeholder="password" id="password" onChange={onChangeHandler} className="loginInput" />
            {/* we can disable the button by this ..disabled ={loading} */}
            <button  onClick={onClickHandler} className="loginButton">login</button>
             {error && <span>{error.message}</span>}
             <h6>Don't have an account?</h6>
             <button  onClick={onClickSignupHandler} className="loginButton">SignUp</button>
        </div>
    </div> 
    );
}

export default Login;