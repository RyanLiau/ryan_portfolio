import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./Home.tsx";
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Course_Recommender from './Course_Recommender.tsx';

const router = createBrowserRouter([
  {
    path: "/ryan_portfolio/",
    element: <App />,
    children: [
      {
        path: "/ryan_portfolio/",
        element: <Home />,
      },{
        path: "/ryan_portfolio/course-recommender/",
        element: <Course_Recommender />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)

