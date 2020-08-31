import * as React from 'react'

// Import components
import PizzaAddCrust from './../components/pizzaAddCrust'

// Import interfaces
import { PizzaItemObjInterface, CrustPageInterface } from './../interfaces'

const CrustPage = (props: CrustPageInterface) => {
  // Handle adding new pizza crust type
  function handleAddItem(itemToAdd: PizzaItemObjInterface) {
    if (itemToAdd.crust === "Thin") {
      props.pizzaItem.price = props.pizzaItem.price + 2
    }
    else if (itemToAdd.crust === "Thick"){
      props.pizzaItem.price = props.pizzaItem.price + 4
    }
    props.pizzaItem.crust = itemToAdd.crust

    // Update pizzaItem state
    props.setPizzaItem(props.pizzaItem)
  }

  return (
    <PizzaAddCrust
      crustName={props.crustName}
      pizzaItem={props.pizzaItem}
      handleAddItem={handleAddItem}
    />
  )
}
export default CrustPage
