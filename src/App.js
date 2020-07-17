import React from 'react';
import Home from './pages/Home/Home.js';
import Feedback from './pages/Feedback/Feedback.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Designer">Designer Placeholder</Route>
        <Route path="/Feedback">
          <Feedback />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
