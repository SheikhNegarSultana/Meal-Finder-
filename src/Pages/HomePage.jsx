import { NavLink } from "react-router-dom";


const HomePage = () => {
    return (
        <div>

<div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col items-center justify-center p-4">

  <h1 className=" text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Welcome to Meal Finder Pro</h1>

  <p className="text-lg text-gray-700 mb-[2rem] text-center">Discover delicious meals from around the world</p>

  <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row w-full justify-center">
    <NavLink to="/random" className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 text-center">
      Random Meal
    </NavLink>
    
    <NavLink to="/categories" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 text-center">
      View Categories
    </NavLink>
  </div>
</div>
          
        </div>
    );
};

export default HomePage;