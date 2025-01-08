import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const {meals} = useLoaderData();

  return (
    <div className="min-h-screen bg-gray-50 p-6">

    <h1 className=" text-center mt-10 mb-10 font-bold text-6xl"> The Meals   </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {meals.map((meals) => (
          <div
            key={meals.idMeal}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transform hover:scale-105 transition"
          >
            <img
              src={meals.strMealThumb}
              alt={meals.strMeal}
              className="rounded-md w-full mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {meals.strMeal}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
