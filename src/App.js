import React from 'react';
import './App.css';
import Welcome from './pages/Welcome';
import MainQuiz from './pages/MainQuiz'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuizData from './QuizData';


function App() {



  return (
    <>

    <QuizData />

    <Welcome />



<Router path='/mainquiz'>
    <Switch>
      <MainQuiz />
    </Switch>
  </Router>

</>


  );


}

export default App;
