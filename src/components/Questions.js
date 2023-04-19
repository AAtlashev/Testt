import React from 'react';
import '../App.css'
import { NavLink } from 'react-router-dom';

export const Questions =(props) =>{
    return (
        <div className = 'test-wrapper'> 
        <h2 
        className='question-title'><span>{props.questionNumber}</span> {props.question}
        </h2>
  
          <div
           className= 'question-inputs'>
            <input className= 'question-inputs' type ='radio' id = 'q1' name = 'q1' value = {props.value1}/>
            <label htmlFor='q1'>{props.var1} </label>
            </div>
  
            <div 
            className= 'question-inputs'>
            <input className= 'question-inputs' type ='radio' id = 'q2' name = 'q1' value = {props.value2}/>
            <label htmlFor='q1'>{props.var2} </label> 
            </div>
  
            <div 
            className= 'question-inputs'>
            <input className= 'question-inputs' type= 'radio' id = 'q3' name = 'q1' value = {props.value3}/>
            <label htmlFor='q1'>{props.var3} </label> 
            <div className= 'question-button' >
               <NavLink to ={props.link}><input className='question-button-next' type='button' value ={props.next}/> </NavLink>
            </div>
            </div>
       </div>
    )
}