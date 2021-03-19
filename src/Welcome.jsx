import axios from "axios";
import React, {useState} from "react";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { useHistory } from "react-router-dom";


function App(){

  const history = useHistory();
  const [showLogin, setLogin] = useState(true)


  const changeLoginSignUp =() => {

    setLogin(!showLogin);
  }

  const enterSupportNinja = (email, password) => {
    axios.post("http://localhost:3001/api/user/login", {
      user_email: email,
      user_password: password
    }).then((response)=>{
    console.log(response)
    
    history.push("/Home");

  })
  }


  const signUpSupportNinja = (company, email, password) => {

    axios.post("http://localhost:3001/api/signUp/post", {
      user_email: email,
      user_password: password,
      customer_name: company,
      customer_address: null,
      customer_phone: null,
      customer_email: email
    }).then((response)=>{
    console.log(response)

  })

    
  }



    return (
      <div className="welcome container">
        {showLogin === true && <div>
        <div>
          <h2>Login</h2>
          <LoginForm onEnterSupportNinja = {enterSupportNinja} />
          <p>No account yet? <span onClick={changeLoginSignUp}>Signup</span> instead.</p>
        </div> </div>}
        {showLogin === false &&  <div>
          <h2>Sign up</h2>
          <SignupForm onSignUpSupportNinja = {signUpSupportNinja} />
          <p>Already registered? <span onClick={changeLoginSignUp}>Login</span> instead.</p>
        </div>}
        </div>
      );

}

export default App