import React, {useState} from 'react';



function SignupForm(props){

  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSignUpSupportNinja = (e) => {
    e.preventDefault(); 
    props.onSignUpSupportNinja(company, email, password)
  }


    return (
      <form>
      <input type="text" required placeholder="company name"
      onChange = {(e)=> {
        setCompany(e.target.value)
      }}
      />
      <input type="email" required placeholder="email"
      onChange = {(e)=> {
        setEmail(e.target.value)
      }}
      />
      <input type="password" required placeholder="password"
      onChange = {(e)=> {
        setPassword(e.target.value)
      }}
      />
      <div class="error"> </div>
      <button onClick = {onSignUpSupportNinja}>Sign up</button>
      </form>
      );

}

export default SignupForm