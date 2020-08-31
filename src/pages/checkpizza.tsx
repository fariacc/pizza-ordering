import * as React from 'react'

// Import components
import CheckCustomPizza from './../components/checkCustomPizza'

// Import interfaces
import { PizzaListInterface } from './../interfaces'

const CheckPizzaPage = (props: PizzaListInterface) => {
  return (
    <CheckCustomPizza
      pizzaItem={props.pizzaItem}
    />
  )
}
export default CheckPizzaPage
