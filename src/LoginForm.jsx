import React from 'react';



function LoginForm(){


    return (
        <form>
        <input type="email" required placeholder="email"/>
        <input type="password" required placeholder="password"/>
        <div class="error">error</div>
        <button>Log in</button>
        </form>
      );

}

export default LoginForm