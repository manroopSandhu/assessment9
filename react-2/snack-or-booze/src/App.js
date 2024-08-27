import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import FoodItem from "./FoodItem";
import FoodMenu from "./FoodMenu";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let snacks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks)
      setIsLoading(false)
    }
    getDrinks
  }, [])

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>

          <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>

            <Route exact path="/snacks">
              <FoodMenu snacks={snacks} title="Snacks" addSnack={addSnack} setSnacks={setSnacks}/>
            </Route>

            <Route path="/snacks/:id">
              <FoodItem snacks={snacks} drinks={drinks} cantFind="/snacks" />
            </Route>

            <Route exact path="/drinks">
              <FoodMenu drinks={drinks} title="Drinks" addDrink={addDrink} setDrinks={setDrinks}/>
            </Route>

            <Route path="/drinks/:id">
              <FoodItem snacks={snacks} drinks={drinks} cantFind="/drinks" />
            </Route>

            <Route path="/add/snacks">
              <NewFoodForm type="snack" addSnack={addSnack} setSnacks={setSnacks} />
            </Route>

            <Route path="/add/drinks">
              <NewFoodForm type="drink" addDrink={addDrink} setDrinks={setDrinks} />
            </Route>

            <p>Hmm. I can't seem to find what you want</p>

          </Switch>
        </main>
      </BrowserRouter>

    </div>
  );
}

export default App;
