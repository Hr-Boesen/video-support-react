import React from "react";
import {useSelector, useDispatch}  from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserLogin} from "./redux/login";
import axios from "axios";


function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.login)

 const logOut = () => {
   
  axios.post("/api/user/logout").then((response)=>{
 console.log(response)
})

  dispatch(setUserLogin(0))
  history.push("/welcome")
 }

  return (
    <header className="flex-container-header">
      <div className="logo"> SUPPORT NINJA</div>
      {loggedIn === 1 && <div onClick={logOut} className="logout">Logout</div>}
    </header>
  );
}

export default Header;