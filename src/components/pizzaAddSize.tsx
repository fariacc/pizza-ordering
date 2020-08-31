import * as React from 'react'
import { Link } from 'react-router-dom'
import pizzaImage from '../assets/single-pizza.png'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import {
  Grid,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@material-ui/core'

// Import interface
import { PizzaAddSizeInterface } from './../interfaces'

const PizzaAddSize = (props: PizzaAddSizeInterface) => {
  // Prepare PizzaItemAdd states
  const [sizeName, setSizeName] = React.useState('')

  const sizes = [
    { name: "Small", price: "$8", imgAlt: "Image of a small size pizza" },
    { name: "Medium", price: "$10", imgAlt: "Image of a medium pizza" },
    { name: "Large", price: "$12", imgAlt: "Image of a large size pizza" }
  ]

  props.handleAddItem({
    price: props.pizzaItem.price,
    size: sizeName,
    crust: props.pizzaItem.crust,
    toppings: props.pizzaItem.toppings
  })

  return (
    <Grid item xs={12} md={10} className="add-size">
      <Grid item xs={12} md={12}>
        <div className="pizza-background"/>
        <h1>Choose the size of your pizza</h1>
        <p className="illustrative-image">
          The following images are for illustration purposes only.
        </p>
      </Grid>
      <Grid item xs={12} md={12}>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="size" name="size" value={sizeName} onChange={(event) => setSizeName(event.target.value)}>
            {sizes.map((size, index) => (
              <FormControlLabel value={size.name} key={index} control={<Radio />} labelPlacement="top"
                label={
                  <React.Fragment>
                    <img src={pizzaImage} alt={size.imgAlt}/>
                    <p>{size.name + " (" + size.price + ")"}</p>
                  </React.Fragment>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12} className="btn btn-add">
        <Link to={sizeName ? "/crust" : '/'}>
          <Button variant="contained" color="primary">
            <LocalPizzaIcon/> Choose crust type
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default PizzaAddSize
