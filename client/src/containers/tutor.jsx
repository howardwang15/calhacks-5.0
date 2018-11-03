import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './home';
import { NameForm as TutorForm } from './tutor_form';

export default class TutorResume extends React.Component {
    render() {
        return (
          <Router>
            <div className="tutor-container">
    	        <h1>Tutor Resume</h1>
              <TutorForm />
              <Link to="/home">Home</Link>
              <Route path="/home" component={Home} />
            </div>
          </Router>
        );
    }
}
