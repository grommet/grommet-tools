import React from 'react';
import Home from './pages/Home.js';
import Feedback from './pages/Feedback.js';
import Designer from './pages/Tools/Designer.js';
import Slides from './pages/Tools/Slides.js';
import Tabular from './pages/Tools/Tabular.js';
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
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/tabular">
            <Tabular />
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
