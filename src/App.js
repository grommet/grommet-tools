import React from 'react';
import Home from './pages/Home/Home.js';
import Feedback from './pages/Feedback/Feedback.js';
import Designer from './pages/Designer/Designer.js';
import Images from './pages/Images/Images.js';
import Slides from './pages/Slides/Slides.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { grommetToolsTheme } from './theme.js';
import { Grommet } from 'grommet';

function App() {
  return (
    <Grommet className="App" theme={grommetToolsTheme}>
      <Router>
        <Switch>
          <Route path="/designer">
            <Designer />
          </Route>
          <Route path="/slides">
            <Slides />
          </Route>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
}
export default App;
