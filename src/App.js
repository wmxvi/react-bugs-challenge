import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavigationDrawer from './components/navigationDrawer'
import Home from './pages/home';
import QuestionOne from './pages/questionOne'
import QuestionTwo from './pages/questionTwo'
import QuestionThree from './pages/questionThree'
import QuestionFour from './pages/questionFour'
import AppBar from './components/header'

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar/>
        <NavigationDrawer/>
        <div style={{flex: 1, overflow:'auto'}}>
          <Switch>
            <Route path="/questionOne">
              <QuestionOne/>
            </Route>
            <Route path="/questionTwo">
              <QuestionTwo />
            </Route>
            <Route path="/questionThree">
              <QuestionThree />
            </Route>
            <Route path="/questionFour">
              <QuestionFour />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
