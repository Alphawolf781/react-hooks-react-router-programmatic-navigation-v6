import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
const navigate = useNavigate()
const[isLoggedIn, setIsLoggedIn]= useState(false)

const login=()=>{
  setIsLoggedIn(true)
}
const logOut=()=>{
  setIsLoggedIn(false)
}
useEffect(()=>{
  if(isLoggedIn){
navigate("/")
  }else{
    navigate("/login")
  }
},[isLoggedIn])

  return (
    <div className="app">
      {isLoggedIn ?<NavBar logOut={logOut}/>:<navigate to="/login"/>}
      <Outlet context={login} />
    </div>
  );
}

export default App;
