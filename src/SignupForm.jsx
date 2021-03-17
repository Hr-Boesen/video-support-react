import React from 'react';



function SignupForm(){


    return (
      <form>
      <input type="text" required placeholder="display name" />
      <input type="email" required placeholder="email" />
      <input type="password" required placeholder="password" />
      <div class="error"> error </div>
      <button>Sign up</button>
      </form>
      );

}

export default SignupForm