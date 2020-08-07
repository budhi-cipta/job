import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Home from './pages/Home'
import JobListKu from './pages/JobListKu';
import BlogList from './pages/BlogList'
 

import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/joblist'>
          <JobListKu />
        </Route>
        <Route path='/bloglist'>
          <BlogList />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
      </Switch>
    </Router>
  );
}



export default App;
