import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./Home.tsx";
// import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Course_Recommender from './Course_Recommender.tsx';
import Cifar from './Cifar.tsx'

const router = createBrowserRouter([
  {
    path: "/ryan_portfolio/",
    element: <Home />
  },
  {
    path: "/ryan_portfolio/course-recommender/",
    element: <Course_Recommender />,
  },
    {
    path: "/ryan_portfolio/cifar-gan/",
    element: <Cifar />,
  }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)

