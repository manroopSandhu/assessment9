import axios from "axios";

const BASE_API_URL =   "http://localhost:5000"

const addSnack = async (newSnack, setSnacks) => {
    try {
        // make a post request to the API to add the new snack
        await axios.get(`${BASE_API_URL}/snacks`, newSnack)

        // update the state to include the new snack
        setSnacks((prevSnacks) => [...prevSnacks, newSnack])
    } catch (error) {
        console.error("Error adding snack", error)
    }
}

const addDrink = async (newDrink, setDrinks) => {
    try {
        // make a p[ost request tot he api to add the new drink
        await axios.get(`${BASE_API_URL}/drinks`, newDrink)

        // update the state to include the new drink
        setDrinks((prevDrink) => [...prevDrink, newDrink])
    } catch (error) {
        console.error("Error adding drink", error)
    }
}

export {addDrink, addSnack}

// helloßß