import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Import pages
import SizePage from './pages/size'
import CrustPage from './pages/crust'
import ToppingsPage from './pages/toppings'
import CheckPizzaPage from './pages/checkpizza'

import { Grid } from '@material-ui/core'

// Import interface
import { PizzaItemObjInterface } from './interfaces'

const AppRouter = () => {
  // Prepare default app states
  const [pizzaItem, setPizzaItem] = React.useState<PizzaItemObjInterface>(Object)
  const [sizeName, setSizeName] = React.useState('')
  const [crustName, setCrustName] = React.useState('')
  const [toppingsNames, setToppingsNames] = React.useState<Array<string>>([])

  return (
    <div className="app">
      <Grid container justify="center" alignItems="center">
        <BrowserRouter>
          <Switch>
            {/* Add size of the pizza */}
            <Route path="/" exact={true}>
              <SizePage
                sizeName={sizeName}
                pizzaItem={pizzaItem}
                setSizeName={setSizeName}
                setPizzaItem={setPizzaItem}
              />
            </Route>

            {/* Add crust type*/}
            <Route path="/crust">
              <CrustPage
                crustName={crustName}
                pizzaItem={pizzaItem}
                setCrustName={setCrustName}
                setPizzaItem={setPizzaItem}
              />
            </Route>

            {/* Add ingredients as toppings*/}
            <Route path="/toppings">
              <ToppingsPage
                toppingsNames={toppingsNames}
                pizzaItem={pizzaItem}
                setToppingsNames={setToppingsNames}
                setPizzaItem={setPizzaItem}
              />
            </Route>

            {/* Check the custom pizza*/}
            <Route path="/check-pizza">
              <CheckPizzaPage
                pizzaItem={pizzaItem}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </Grid>
    </div>
  )
}

export default AppRouter
