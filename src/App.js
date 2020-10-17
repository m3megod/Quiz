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



function App() {



  return (
    <>



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
