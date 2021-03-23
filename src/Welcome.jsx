import axios from "axios";
import React, {useState} from "react";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { useHistory } from "react-router-dom";
import {useDispatch}  from "react-redux";
import { setUserLogin} from "./redux/login";



function Welcome(){

  const history = useHistory();
  const [showLogin, setLogin] = useState(true)
  const [error, setError] = useState({})
  //redux
  const dispatch = useDispatch();

  const changeLoginSignUp =() => {

    setLogin(!showLogin);
  }

  const enterSupportNinja = (email, password) => {
    axios.post("/api/user/login", {
      user_email: email,
      user_password: password
    }).then((response)=>{

    const data = response.data

    if(data.loggedIn === true){
      dispatch(setUserLogin(1))
       history.push("/Home");
       console.log("logged in")
    }else{
       setError(data)
    }
    
  })
  }


  const signUpSupportNinja = (company, email, password) => {

    axios.post("/api/signUp/post", {
      user_email: email,
      user_password: password,
      customer_name: company,
      customer_address: null,
      customer_phone: null,
      customer_email: email
    }).then((response)=>{
      const data = response.data
   if(data.continueSignUpCustomer === true){
    dispatch(setUserLogin(1))
     history.push("/Home");
     console.log("logged in")
  }else{
     setError(data)
  }

  })

    
  }



    return (
      <div className="welcome container">
        {showLogin === true && <div>
        <div>
          <h2>Login</h2>
          <LoginForm onEnterSupportNinja = {enterSupportNinja} error={error} />
          <p>No account yet? <span onClick={changeLoginSignUp}>Signup</span> instead.</p>
        </div> </div>}
        {showLogin === false &&  <div>
          <h2>Sign up</h2>
          <SignupForm onSignUpSupportNinja = {signUpSupportNinja}/>
          <p>Already registered? <span onClick={changeLoginSignUp}>Login</span> instead.</p>
        </div>}
        </div>
      );

}

export default Welcome