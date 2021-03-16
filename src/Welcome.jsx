import React from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'


function App(){


    return (
        <div class="welcome container">
        <div>
          <h2>Login</h2>
          <LoginForm />
          <p>No account yet? <span>Signup</span> instead.</p>
        </div>
        <div>
          <h2>Sign up</h2>
          <SignupForm />
          <p>Already registered? <span>Login</span> instead.</p>
        </div>
        </div>
      );

}

export default App