import React from 'react';
import Home from './pages/Home/Home.js';
import Designer from './pages/Designer/Designer.js';
import { Grommet } from 'grommet';
import { grommetToolsTheme } from './theme.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Grommet theme={grommetToolsTheme}>
      <Router>
        <Switch>
          <Route path="/Designer">
            <Designer />
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
