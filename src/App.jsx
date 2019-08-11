import React from 'react';
import Navigation from './Navigation';
import CssBaseline from '@material-ui/core/CssBaseline';
import Subjects from './Subjects';

const App = () => {
  return (
    <CssBaseline>
      <Navigation />
      <Subjects />
    </CssBaseline>
  );
};

export default App;