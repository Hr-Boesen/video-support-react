import React, {useState} from "react";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


function App(){

  const [showLogin, setLogin] = useState(true)


  const changeLoginSignUp =() => {

    setLogin(!showLogin);
  }

  const enterSupportNinja = () => {
    alert("Entered Support Ninja")
  }


  const signUpSupportNinja = () => {
    alert("Sign Up Support Ninja")
  }



    return (
      <div class="welcome container">
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