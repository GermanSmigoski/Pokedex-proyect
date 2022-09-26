import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchName } from "../../Actions";
import './NavBar.css' 

const NavBar = () => {
  const dispatch = useDispatch()
  const [name,setName] = useState("")

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
  }

  const handleSubmit =  (e) => {
    e.preventDefault()
    dispatch(searchName(name))
  }



  return (
    <div>
      <input onChange={(e) => handleInputChange(e)} className="input" type="text" placeholder="Search pokemon..."/>
        <button onClick={(e) => handleSubmit(e)} className="buttonSubmit" type="submit" value="search" >Search</button>
    </div>
  );
};

export default NavBar;
