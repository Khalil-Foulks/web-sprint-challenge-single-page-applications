import React from "react";

export default function Form(props) {

    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
      } = props

  return (
    <section className="form">
      <div>

        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <div>{errors.name}</div>

                <div className='inputs'>
                    <label id='name'>Name&nbsp;
                        <input
                            name='name'
                            value={values.name}
                            onChange={onInputChange}
                            type='text'
                        />
                    </label>

                    <label id='size'>Size&nbsp;
                        <select
                            name='size'
                            value={values.size}
                            onChange={onInputChange}
                        >
                            <option value=''>--Select A Size--</option>   
                            <option value='Small'>Small</option>
                            <option value='Medium'>Medium</option> 
                            <option value='Large'>Large</option>  
                        </select>
                    </label>
                </div>

                <div className='toppings checkboxes'>
                    <h4>Extra Toppings</h4>
                    
                    <label id='pepperoni'>pepperoni&nbsp;
                        <input
                            name='pepperoni'
                            checked={values.toppings.pepperoni}
                            onChange={onCheckboxChange}
                            type='checkbox'
                        />
                    </label>

                    <label id='pineapple'>pineapple&nbsp;
                        <input
                            name='pineapple'
                            checked={values.toppings.pineapple}
                            onChange={onCheckboxChange}
                            type='checkbox'
                        />
                    </label>

                    <label id='chicken'>chicken&nbsp;
                        <input
                            name='chicken'
                            checked={values.toppings.chicken}
                            onChange={onCheckboxChange}
                            type='checkbox'
                        />
                    </label>

                    <label id='mushrooms'>mushrooms&nbsp;
                        <input
                            name='mushrooms'
                            checked={values.toppings.mushrooms}
                            onChange={onCheckboxChange}
                            type='checkbox'
                        />
                    </label>
                </div>

                <div className='form-group inputs'>
                    <label id='special-intructions'>Special Instructions&nbsp;
                            <input
                                name='instructions'
                                value={values.intructions}
                                onChange={onInputChange}
                                type='text'
                            />
                    </label>
                </div>
            </div>
            <div className='form-group submit'>
                <button id='submit' disabled={disabled}>Add to Order</button>
            </div>
        </form>
      </div>
    </section>
  );
}