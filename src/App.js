import React from "react";
import HomePage from './components/HomePage'
import Form from './components/Form'
import { Switch, Route, Link } from 'react-router-dom'

import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <nav>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Make Pizza</Link>
        </div>
      </nav>

      <Switch>
        <Route path="/pizza">
          <Form/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
