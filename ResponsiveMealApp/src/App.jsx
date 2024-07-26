import MealApp from './MealApp.jsx';
import Navbar from './components/Navbar.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  // Hooks for manipulating searching and storing of meals
  const [search, setSearch] = useState("");
  const [meals, setMeal]  = useState([]);
  //fetching data through mealDB's API
  useEffect(() =>{
        let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian'
        axios.get(url)
        .then((res) => {
            setMeal(res.data.meals)
        }).catch((error) => {
            alert("Check your internet connection");
            console.error(error);
        })
          
      },[]);
  // update the variable search as the user types
  function inputChange(e){
      setSearch(e.target.value);
  }
  //filtering the meals to show based on the user input
  const filterItems = meals.filter((meal) => (
    meal.strMeal.trim().toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) === 0
  ))

  return (
    <>
    <Navbar 
      search={search}
      inputChange = {inputChange}
      />
    <div className="wrapper mx-[20px]">
      
      <MealApp 
      filterItems={filterItems}
      meals={meals}     
      search={search}
      />

    </div>
    </>
      

  )
}

export default App;
