import Meal from "./components/meal";


function MealApp({filterItems, meals, search}){
    const filterProducts = filterItems.map(({strMeal, strMealThumb, idMeal}) =>{
            return (
                    <Meal
                    strMeal={strMeal}
                    strMealThumb={strMealThumb}/> 
            )
        }); 
    const renderMeals = meals.map(({strMeal, strMealThumb, idMeal}) =>{
        return (
            <Meal
            strMeal={strMeal}
            strMealThumb={strMealThumb}/>
        )
    })
    return (   
        <>
            <section className="flex flex-wrap pt-20" >
                {search.length === 0 || filterItems.length === 0 ? renderMeals: filterProducts }
            </section>
        </>       
    )      
}
export default MealApp;