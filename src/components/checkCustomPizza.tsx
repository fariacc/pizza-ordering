import * as React from 'react'
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core'

// Import interface
import { PizzaListInterface } from './../interfaces'

const CheckCustomPizza = (props: PizzaListInterface) => {
  return (
    <div className="check-pizza">
      <p>Price: ${props.pizzaItem.price}</p>
      <p>Size: {props.pizzaItem.size}</p>
      <p>Crust type: {props.pizzaItem.crust}</p>
      <p>Toppings:</p>
      { props.pizzaItem.toppings.map(topping =>
        <p>{topping}</p>
      )}
    </div>
  )
}

export default CheckCustomPizza
