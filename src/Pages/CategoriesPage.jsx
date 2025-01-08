import { useLoaderData } from "react-router-dom";
import CategoryPage from "./CategoryPage";


const CategoriesPage = () => {

    const meals = useLoaderData();
    const mealCategories = meals.categories;

    return (
    <div>

   <div className="min-h-screen bg-blue-100 text-gray-700 py-6">
  {/* Header */}
  <div className="text-center mb-6">
    <h1 className="text-3xl font-bold mb-4">Explore Meals </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 mt-[4rem] ">
    {
        mealCategories.map(category => 
        <CategoryPage key={category.idCategory} category={category}></CategoryPage>)
            
    }
</div>

  </div>



</div>

        </div>
    );
};

export default CategoriesPage;