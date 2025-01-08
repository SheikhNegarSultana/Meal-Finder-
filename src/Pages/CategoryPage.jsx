import { Link } from "react-router-dom";


const CategoryPage = ({category}) => {
    const { idCategory, strCategory,strCategoryThumb,strCategoryDescription} = category
    return (

    <div>
  

  <div className="bg-purple-100 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col justify-between h-[20rem]">

    <img src={strCategoryThumb} alt={strCategory} className="rounded-md mb-2" />
    <p className="text-sm text-gray-600">Category: {strCategory}</p>
    <p className="text-sm text-gray-600 overflow-hidden">{strCategoryDescription}</p>
    <Link to={`/categories/${strCategory}`} className="text-pink-300 hover:text-pink-400 transition">
  View Details
</Link>

  </div>

 

    </div>

    );
};

export default CategoryPage;