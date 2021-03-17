import React from 'react';



function LoginForm(props){


    return (
        <form>
        <input type="email" required placeholder="email"/>
        <input type="password" required placeholder="password"/>
        <div class="error">error</div>
        <button onClick={(e) => {
          e.preventDefault();
          props.onEnterSupportNinja()}}>Log in</button>
        </form>
      );

}

export default LoginForm