import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import CategoriesPage from './Pages/CategoriesPage';
import RandomMealPage from './Pages/RandomMealPage';
import CategoryDetails from './Pages/CategoryDetails';
import MealDetails from './Pages/MealDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/categories",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(
        (res) => res.json()
      ),
    element: <CategoriesPage />,
  },
  {
    path: "/random",
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((res) =>
        res.json()
      ),
    element: <RandomMealPage />,
  },
  {
    path: "/random/:idMeal",
    loader: ({ params }) =>
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`)
        .then((res) => res.json())
        .then((data) => data.meals[0]), 
    element: <MealDetails />,
  },  
  {
    path: "/categories/:category",
    loader: ({ params }) =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
      ).then((res) => res.json()),
    element: <CategoryDetails />,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
