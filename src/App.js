import React from "react";
import HomePage from './components/HomePage'
import { Switch, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Make Pizza</Link>
      </div>
    </>
  );
};
export default App;
