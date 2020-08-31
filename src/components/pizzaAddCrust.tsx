import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from '@material-ui/core'

// Import interface
import { PizzaAddCrustInterface } from './../interfaces'

const PizzaAddCrust = (props: PizzaAddCrustInterface) => {
  // Prepare PizzaItemAdd states
  const [crustName, setCrustName] = React.useState('')

  props.handleAddItem({
    price: props.pizzaItem.price,
    size: props.pizzaItem.size,
    crust: crustName,
    toppings: []
  })

  return (
    <div className="add-crust">
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose the crust type of your pizza</FormLabel>
        <RadioGroup aria-label="crust" name="crust" value={crustName} onChange={(event) => setCrustName(event.target.value)}>
          <FormControlLabel value="thin" control={<Radio />} label="Thin (+$2)" />
          <FormControlLabel value="thick" control={<Radio />} label="Thick (+$4)" />
        </RadioGroup>
        <Link className="btn btn-add" to="/toppings">
          <Button variant="contained" color="primary">Choose ingredients as toppings</Button>
        </Link>
      </FormControl>
    </div>
  )
}

export default PizzaAddCrust
