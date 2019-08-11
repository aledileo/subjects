import React from 'react';
import { Router } from '@reach/router'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation from './Navigation';
import Subjects from './Subjects';
import AddSubject from './AddSubject';

const App = () => {
  return (
    <CssBaseline>
      <Navigation />
      <Router>
        <Subjects path="/" />
        <AddSubject path="/add"/>
      </Router>
    </CssBaseline>
  );
};

export default App;