import React, { useState } from "react";
import HomePage from './components/HomePage'
import Form from './components/Form'
import { Switch, Route, Link } from 'react-router-dom'

import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'


const initialFormValues = {
  name:'',
  size:'',

  toppings: {
    pepperoni:false,
    pineapple:false,
    chicken:false,
    mushrooms:false,
  },

  intructions:'',
}

const initialFormErrors = {
  name:'',
}

const initialDisabled = true

const App = () => {
  const [pizzaData, setPizzaData] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErros, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)



  const postNewPizza = newPizza => {
    axios('https://reqres.in/api/users', newPizza)
    .then(res =>{
      setPizzaData([...pizzaData,res.data])
    })
    .catch(err =>{
      debugger
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }



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
