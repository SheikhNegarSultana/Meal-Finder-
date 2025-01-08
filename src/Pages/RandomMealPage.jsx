import { useLoaderData, useNavigate } from "react-router-dom";


const RandomMealPage = () => {
    const randoms = useLoaderData();
    const random = randoms.meals

    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
      }
    
    return (
        <div>
<div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center justify-center">
  <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Random Meal</h1>

  <div className="flex flex-wrap justify-center gap-6 w-full">
    {random.map((meal) => (
      <div key={meal.idMeal} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col sm:flex-row items-center w-full sm:w-1/2 lg:w-1/3">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-md mb-2 w-full sm:w-1/2" />
        <div className="sm:pl-4">
          <h3 className="text-lg font-bold text-gray-800">{meal.strMeal}</h3>
          <a href={`/random/${meal.idMeal}`} className="text-blue-500 hover:text-blue-700 transition">
            View Details
          </a>
        </div>
      </div>
    ))}
  </div>

<button onClick={handleBack} className=" mt-[2rem] bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">
  Back
</button>
</div>




        </div>
    );
};

export default RandomMealPage;