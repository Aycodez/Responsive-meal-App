const Meal = ({strMeal, strMealThumb}) => {
    return (
        <div className="w-[300px] h-[300px] md:w-[250px] md:h-[250px] mx-auto md:mx-4 my-6
         p-3 hover:scale-110 transition-all duration-500 ease-in-out">
            <img className="w-fit" src={strMealThumb} alt="" />
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-lg">{strMeal}</h1>
            </div>
        </div>

    )
}
export default Meal;