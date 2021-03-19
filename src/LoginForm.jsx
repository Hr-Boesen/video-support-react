import React, {useState} from 'react';

function LoginForm(props){


const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); 

function EnterSupportNinja(e){
  e.preventDefault();
  props.onEnterSupportNinja(email, password)
}


    return (
        <form>
        <input type="email" required placeholder="email"
        onChange = {
          (e)=>{
            setEmail(e.target.value)
          }
        }
        />
        <input type="password" required placeholder="password"
        onChange = {
          (e)=>{
            setPassword(e.target.value)
          }
        }
        
        />
        <div className="error"></div>
        <button onClick = {EnterSupportNinja}>Log in</button>
        </form>
      );

}

export default LoginForm