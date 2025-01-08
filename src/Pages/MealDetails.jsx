import { useLoaderData, useNavigate } from "react-router-dom";

const MealDetails = () => {

    const meals = useLoaderData();

    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
      }

    return (
        <div>
        
 <div className=" pt-[4rem] min-h-screen bg-gray-50 p-6 flex items-center justify-center">
 

  <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md pt-10 p-6 animate-fade-in flex flex-col md:flex-row">
    <div className="md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0 flex justify-between flex-col">
      <img src={meals.strMealThumb} alt={meals.strMeal} className="rounded-md w-full mb-4" />
      <button onClick={handleBack} className=" mt-[2rem] bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">
     Back
   </button>
    </div>

    <div className="md:w-1/2 pl-0 md:pl-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2 animate-bounce">{meals.strMeal}</h1>
      <p className="text-gray-600 mb-4">Category: {meals.strCategory}</p>
      <p className="text-gray-600 mb-4">Area: {meals.strArea}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Instructions</h2>
      <p className="text-gray-700">{meals.strInstructions}</p>
    </div>
    
  </div>

</div>


  
        </div>
    );
};

export default MealDetails;