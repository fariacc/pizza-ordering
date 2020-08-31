import * as React from 'react'
import thinCrust from '../assets/thin-crust.png'
import thickCrust from '../assets/thick-crust.png'
import pizzaImage from '../assets/single-pizza.png'

import {
  Grid,
  Divider,
  List,
  ListItem
} from '@material-ui/core'

import Height from '@material-ui/icons/Height'
import ShoppingCart from '@material-ui/icons/ShoppingCart'

// Import interface
import { PizzaListInterface } from './../interfaces'

const CheckCustomPizza = (props: PizzaListInterface) => {
  return (
    <Grid item xs={12} md={10} className="check-pizza">
      <Grid item xs={12} md={12}>
        <div className="pizza-background"/>
        <h1>Here's your custom pizza :)</h1>
        <h2>Check below the details of your order</h2>
        <p className="illustrative-image">
          The following images are for illustration purposes only.
        </p>
      </Grid>
      <Grid container className="pizza-details">
        <Grid item xs={12} md={4} className="pizza-details__size">
          <p>Size: <strong>{props.pizzaItem.size}</strong></p>
          <img src={pizzaImage} alt="Image of a pizza"/>
        </Grid>
        <Grid item xs={12} md={4} className="pizza-details__crust">
          <p>Crust type: <strong>{props.pizzaItem.crust}</strong></p>
          <img src={props.pizzaItem.crust === "Thin" ? thinCrust : thickCrust} alt="Image of a pizza"/>
        </Grid>
        <Grid item xs={12} md={4} className="pizza-details__toppings">
          <p>Toppings:</p>
          <List>
            { props.pizzaItem.toppings.map(topping =>
              <ListItem>
                <p><strong>{topping}</strong></p>
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
      <Divider/>
      <Grid item xs={12} md={12} className="pizza-details__price">
        <p>Total purchased: <strong>${props.pizzaItem.price}</strong></p>
      </Grid>
    </Grid>
  )
}

export default CheckCustomPizza
