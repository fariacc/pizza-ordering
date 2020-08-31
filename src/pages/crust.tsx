import * as React from 'react'

// Import components
import PizzaAddCrust from './../components/pizzaAddCrust'

// Import interfaces
import { PizzaItemObjInterface, CrustPageInterface } from './../interfaces'

const CrustPage = (props: CrustPageInterface) => {
  // Handle adding new pizza crust type
  function handleAddItem(itemToAdd: PizzaItemObjInterface) {
    if (itemToAdd.crust === "thin") {
      props.pizzaItem.price = props.pizzaItem.price + 2
    }
    else if (itemToAdd.crust === "thick"){
      props.pizzaItem.price = props.pizzaItem.price + 4
    }
    props.pizzaItem.crust = itemToAdd.crust

    // Update pizzaItem state
    props.setPizzaItem(props.pizzaItem)
  }

  return (
    <div>
      <PizzaAddCrust
        crustName={props.crustName}
        pizzaItem={props.pizzaItem}
        handleAddItem={handleAddItem}
      />
    </div>
  )
}
export default CrustPage
