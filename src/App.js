import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Introduction, HardSkills, ThisCode, InnerLife } from './pages/index';

import './styles/Introduction.css';
import './styles/Home.css';
import './styles/CircularProgress.css';
import './styles/HardSkills.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"><Introduction /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/hardskills"><HardSkills /></Route>
        <Route exact path="/thiscode"><ThisCode /></Route>
        <Route exact path="/innerlife"><InnerLife /></Route>
      </Switch>
    </div>
  );
}

export default App;
