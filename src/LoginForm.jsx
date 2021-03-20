import React, {useState} from 'react';

function LoginForm(props){


const [email, setEmail] = useState("1@1.dk");
const [password, setPassword] = useState(1); 

function EnterSupportNinja(e){
  e.preventDefault();
  props.onEnterSupportNinja(email, password)
}


    return (
        <form>
        <input type="email" required value= {email} placeholder="email"
        onChange = {
          (e)=>{
            setEmail(e.target.value)
          }
        }
        />
        <input type="password" required value= {password} placeholder="password"
        onChange = {
          (e)=>{
            setPassword(e.target.value)
          }
        }
        
        />
        <div className="error">{props.error.message}</div>
        <button onClick = {EnterSupportNinja}>Log in</button>
        </form>
      );

}

export default LoginForm