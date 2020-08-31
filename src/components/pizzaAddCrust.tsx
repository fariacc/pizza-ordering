import * as React from 'react'
import { Link } from 'react-router-dom'
import thinCrust from '../assets/thin-crust.png'
import thickCrust from '../assets/thick-crust.png'
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
import { PizzaAddCrustInterface } from './../interfaces'

const PizzaAddCrust = (props: PizzaAddCrustInterface) => {
  // Prepare PizzaItemAdd states
  const [crustName, setCrustName] = React.useState('')

  const crusts = [
    { name: "Thin", price: "+$2", imgAlt: "Image of a thin crust pepperoni pizza" },
    { name: "Thick", price: "+$4", imgAlt: "Image of a thick crust pepperoni pizza" }
  ]

  props.handleAddItem({
    price: props.pizzaItem.price,
    size: props.pizzaItem.size,
    crust: crustName,
    toppings: props.pizzaItem.toppings
  })

  return (
    <Grid item xs={12} md={10} className="add-crust">
      <Grid item xs={12} md={12}>
        <div className="pizza-background"/>
        <h1>Choose the crust type of your pizza</h1>
        <p className="illustrative-image">
          The following images are for illustration purposes only.
        </p>
      </Grid>
      <Grid item xs={12} md={12}>
        <FormControl component="fieldset">
          <RadioGroup aria-label="crust" name="crust" value={crustName} onChange={(event) => setCrustName(event.target.value)}>
            {crusts.map((crust, index) => (
              <FormControlLabel key={index} value={crust.name} control={<Radio />} labelPlacement="top"
                label={
                  <React.Fragment>
                    <img src={crust.name === "Thin" ? thinCrust : thickCrust} alt={crust.imgAlt}/>
                    <p>{crust.name + " (" + crust.price + ")"}</p>
                  </React.Fragment>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12} className="btn btn-add">
        <Link to={crustName ? "/toppings" : '/crust'}>
          <Button variant="contained" color="primary">
            <LocalPizzaIcon/> Choose ingredients
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default PizzaAddCrust
