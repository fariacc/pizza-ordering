import * as React from 'react'

// Import components
import PizzaAddSize from './../components/pizzaAddSize'

// Import interfaces
import { PizzaItemObjInterface, SizePageInterface } from './../interfaces'

const SizePage = (props: SizePageInterface) => {

  // Handle adding new pizza size
  function handleAddItem(itemToAdd: PizzaItemObjInterface) {
    if (itemToAdd.size === "small") {
      props.pizzaItem.price = 8
    }
    else if (itemToAdd.size === "medium") {
      props.pizzaItem.price = 10
    }
    else {
      props.pizzaItem.price = 12
    }
    props.pizzaItem.size = itemToAdd.size

    // Update pizzaItem state
    props.setPizzaItem(props.pizzaItem)
  }

  return (
    <div>
      <PizzaAddSize
        sizeName={props.sizeName}
        handleAddItem={handleAddItem}
      />
    </div>
  )
}
export default SizePage
