import React, { useState, useEffect } from "react";
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

  instructions:'',
}

const initialFormErrors = {
  name:'',
}

const initialDisabled = true

const App = () => {
  const [pizzaData, setPizzaData] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)



  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
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

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid =>{
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      });
    });

    setFormValues({
      ...formValues,
      [name]:value,
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } =evt.target

    setFormValues({
      ...formValues, 
      toppings: {
        ...formValues.toppings,
        [name]:checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newPizza = {
      name:formValues.name.trim(),
      size:formValues.size,
      instructions: formValues.instructions,
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true))
    }

    postNewPizza(newPizza)
  }

  useEffect(() =>{
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid);
    });
  }, [formValues])


  return (
    <>
      <h1>Lambda Eats</h1>
      {/* <p>You can remove this code and create your own header</p> */}
      <nav>
        <div className='nav-links'>
            <Link to='/' id='home'>Home</Link>
            <Link to='/pizza' id='orderPizza'>Make Pizza</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path='/'>
          <HomePage/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
