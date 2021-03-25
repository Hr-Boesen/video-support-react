import React from "react";
import {useSelector, useDispatch}  from "react-redux";
import { useHistory } from "react-router-dom";
import { setUserLogin} from "./redux/login";
import axios from "axios";
import Settings from "./Settings";




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
      <div className="logo"> SUPERB<i class="material-icons">stars</i></div>
      {loggedIn === 1 && <div className="right-side"><button onClick={logOut}  class="button logout-btn">Log out</button>
    <Settings/></div> }
    </header>
  );
}

export default Header;