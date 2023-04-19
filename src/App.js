import { Questions } from './components/Questions';
import { Result } from './components/Result';
import { Start } from './components/Start';
import './App.css';
import  store  from './state/store';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';


function App() {

  let [answer, setAnswer] = useState(0)
  let [flag,setFlag] = useState(0)
  let [result,setResult] = useState(0)

  const getResult= () =>{
    setAnswer(0)
    setFlag(0)
    setResult(0)
  }

  let questionsArray = store.questions.map((elem)=>
  <Questions
    questionNumber={elem.questionnumber}
    question={elem.question}
    var1={elem.var1}
    var2={elem.var2}
    var3={elem.var3}
    value1={elem.value1}
    value2={elem.value2}
    value3={elem.value3}
    path={elem.path}
    link={elem.link}
    next={elem.next}
  />
  )

  return (
    <BrowserRouter>
   <div className = 'contanier'>
     <h1 className = 'test-title' style ={{color: 'black'}}> CSS TEST </h1>
     <Routes>
    <Route exact path='/' element={<Start/>}> </Route>
    </Routes>
    {questionsArray}
    <Routes>
    <Route exact path='/result' element={<Result/>}> </Route> 
    </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
