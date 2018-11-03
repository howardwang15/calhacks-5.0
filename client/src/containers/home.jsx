import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TutorResume from './tutor'

export default class Home extends React.Component {
    render() {
        return (
            <Router>
                <div className="home-container">
                    <h1>Home</h1>
                    <Link to="/tutor">Tutor</Link>
                    <Route path="/tutor" component={TutorResume} />
                </div>
            </Router>
        );
    }
}