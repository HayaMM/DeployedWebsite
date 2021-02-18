import React, { Component } from 'react'
import Contact from './Contact'
import Home from './Home'
import Procedures from './Procedures'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const proceduresArray = [
  'General Checkups',
  'Teeth Cleaning',
  'Cavity Screenings',
  'Cavity Fillings',
  'Chipped Tooth Fixings',
  'Tooth Removal',
  'Root Canals']

export default class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/procedures">Procedures</Link> {' '}
          <Link to="/contact">Contact</Link>
        </nav>
        <div>
          {/* at this exact rout="/" */}
          <Route exact path="/" component={Home}></Route>
          <Route path="/procedures" component={() => <Procedures procedures={proceduresArray} />}></Route>
          <Route path="/contact" component={Contact}></Route>


        </div>
      </Router>
    );
  }
}
