import React from 'react';
import { Router } from '@reach/router'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Navigation, { SubjectNavigation } from './Navigation';
import Subjects from './Subjects';
import Subject from './Subject';
import AddSubject from './AddSubject';

const App = () => {
  return (
    <CssBaseline>
      <Router>
        <Navigation path="/" />
        <SubjectNavigation path="subject/:subjectSlug"/>
      </Router>

      <Router>
        <Subjects path="/" />
        <AddSubject path="/add"/>
        <Subject path="subject/:subjectSlug"/>
      </Router>
    </CssBaseline>
  );
};

export default App;