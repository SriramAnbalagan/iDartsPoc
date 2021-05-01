import React, {useEffect, Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Dashboard} from './pages/dashboard';

import './App.css';


const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exactpath="/" component={Dashboard} />
      </Switch>
    </Fragment>
  );
}

export default App;
