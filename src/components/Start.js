import { React } from "react";
import { NavLink } from "react-router-dom";
import '../App.css'

export const Start =() =>{
    return (
        <div 
     className = 'start-wrapper'>
      <NavLink to='/1'><input className= 'start-button' type = 'button' value = 'START'  /> </NavLink>
     </div>

    )
}