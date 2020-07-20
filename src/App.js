import React from 'react';
import Home from './pages/Home/Home.js';
import Feedback from './pages/Feedback/Feedback.js';
import Designer from './pages/Feedback/Designer.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { grommetToolsTheme } from './theme.js';
import { Grommet } from 'grommet';

function App() {
  return (
    <Grommet className="App" theme={grommetToolsTheme}>
      <Router>
        <Switch>
          <Route path="/Designer">
            <Designer />
          </Route>
          <Route path="/Feedback">
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
