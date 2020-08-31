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
import { PizzaAddSizeInterface } from './../interfaces'

const PizzaAddSize = (props: PizzaAddSizeInterface) => {
  // Prepare PizzaItemAdd states
  const [sizeName, setSizeName] = React.useState('')

  props.handleAddItem({
    price: 0,
    size: sizeName,
    crust: '',
    toppings: []
  })

  return (
    <div className="add-size">
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose the size of your pizza</FormLabel>
        <RadioGroup aria-label="size" name="size" value={sizeName} onChange={(event) => setSizeName(event.target.value)}>
          <FormControlLabel value="small" control={<Radio />} label="Small ($8)" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium ($10)" />
          <FormControlLabel value="large" control={<Radio />} label="Large ($12)" />
        </RadioGroup>
        <Link className="btn btn-add" to="/crust">
          <Button variant="contained" color="primary">Choose crust type</Button>
        </Link>
      </FormControl>
    </div>
  )
}

export default PizzaAddSize
