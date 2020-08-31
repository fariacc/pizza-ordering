import * as React from 'react'
import { Link } from 'react-router-dom'
import pepperoniImage from '../assets/pepperoni.png'
import mushroomsImage from '../assets/mushrooms.png'
import onionsImage from '../assets/onions.png'
import sausageImage from '../assets/sausage.png'
import baconImage from '../assets/bacon.png'
import cheeseImage from '../assets/cheese.png'
import olivesImage from '../assets/black-olives.png'
import peppersImage from '../assets/green-pepper.png'
import pineappleImage from '../assets/pineapple.png'
import spinachImage from '../assets/spinach.png'

import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

import {
  Button,
  FormControl,
  Select,
  MenuItem,
  List,
  ListItem,
  Grid
} from '@material-ui/core'

// Import interface
import { PizzaAddToppingsInterface } from './../interfaces'

const PizzaAddToppings = (props: PizzaAddToppingsInterface) => {
  // Prepare PizzaItemAdd states
  const [toppingsNames, setToppingsNames] = React.useState<Array<string>>([])

  const ingredients = [
    { name: "Pepperoni", imgAlt: "A pepperoni slice", img: pepperoniImage },
    { name: "Mushrooms", imgAlt: "White mushrooms", img: mushroomsImage },
    { name: "Onions", imgAlt: "Onions", img: onionsImage },
    { name: "Sausage", imgAlt: "Sausage", img: sausageImage },
    { name: "Bacon", imgAlt: "Slices of beacon", img: baconImage },
    { name: "Extra cheese", imgAlt: "A piece of cheese", img: cheeseImage },
    { name: "Black olives", imgAlt: "Black olives and its green leaves", img: olivesImage },
    { name: "Green peppers", imgAlt: "Green pepper", img: peppersImage },
    { name: "Pineapple", imgAlt: "A whole pineapple and a sliced piece", img: pineappleImage },
    { name: "Spinach", imgAlt: "Spinach", img: spinachImage }
  ]

  props.handleAddItem({
    price: props.pizzaItem.price,
    size: props.pizzaItem.size,
    crust: props.pizzaItem.crust,
    toppings: toppingsNames
  })

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    if (props.pizzaItem.size === "Small" && toppingsNames.length >= 5) {
      alert('Please choose only 5 ingredients')
      setToppingsNames([])
    }
    else if (props.pizzaItem.size === "Medium" && toppingsNames.length >= 7) {
      alert('Please choose only 7 ingredients')
      setToppingsNames([])
    }
    else if (props.pizzaItem.size === "Large" && toppingsNames.length >= 9) {
      alert('Please choose only 9 ingredients')
      setToppingsNames([])
    }
    else{
      setToppingsNames(event.target.value as string[]);
    }
  }

  return (
    <Grid item xs={12} md={10} className="add-toppings">
      <Grid item xs={12} md={12}>
        <div className="pizza-background"/>
      </Grid>
      <Grid container>
        <Grid item xs={12} md={5}>
          <h1>Choose the ingredients below for the topping of your pizza</h1>
          <h2>
            You can add from [0-3] ingredients without any additional cost for your pizza.
          </h2>
          <h2>Each new addition after the third one costs $0.50.</h2>
          <FormControl component="fieldset">
            <Select multiple value={toppingsNames} onChange={handleChange}>
              {ingredients.map((ingredient, index) => (
                <MenuItem key={index} value={ingredient.name}>
                  {ingredient.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={7}>
          <h2><strong>Ingredients avaiable:</strong></h2>
          <p className="illustrative-image">
            The following images are for illustration purposes only.
          </p>
          <List className="ingredients-pictures">
            {ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <p>{ingredient.name}</p>
                <img src={ingredient.img} alt={ingredient.imgAlt}/>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} className="btn btn-add">
        <Link to={toppingsNames.length !== 0 ? "/check-pizza" : '/toppings'}>
          <Button variant="contained" color="primary">
            <LocalPizzaIcon/> Check your pizza
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default PizzaAddToppings
