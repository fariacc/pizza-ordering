import * as React from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  FormControl,
  FormLabel,
  Select,
  MenuItem
} from '@material-ui/core'

// Import interface
import { PizzaAddToppingsInterface } from './../interfaces'

const PizzaAddToppings = (props: PizzaAddToppingsInterface) => {
  // Prepare PizzaItemAdd states
  const [toppingsNames, setToppingsNames] = React.useState<Array<string>>([])

  const ingredients = [
    'Pepperoni',
    'Mushrooms',
    'Onions',
    'Sausage',
    'Bacon',
    'Extra cheese',
    'Black Olives',
    'Green Peppers',
    'Pineapple',
    'Spinach'
  ]

  props.handleAddItem({
    price: props.pizzaItem.price,
    size: props.pizzaItem.size,
    crust: props.pizzaItem.crust,
    toppings: toppingsNames
  })

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setToppingsNames(event.target.value as string[]);
  }

  return (
    <div className="add-toppings">
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose the ingredients for the topping of your pizza</FormLabel>
        <Select
          id="toppings"
          multiple
          value={toppingsNames}
          onChange={handleChange}
        >
          {ingredients.map((ingredient, index) => (
            <MenuItem key={index} value={ingredient}>
              {ingredient}
            </MenuItem>
          ))}
        </Select>
        <Link className="btn btn-add" to="/check-pizza">
          <Button variant="contained" color="primary">Check your pizza</Button>
        </Link>
      </FormControl>
    </div>
  )
}

export default PizzaAddToppings
