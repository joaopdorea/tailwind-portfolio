import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UniversityPage from './routes/University';
import FinancePage from './routes/Finance'
import PetPage from './routes/Pet'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import PrivacyPage from './routes/Privacy';



const router = createBrowserRouter([{

  path:"/",
  element: <App/>,
},
{
  path: "university",
  element: <UniversityPage/>,
},

{
  path: "finance",
  element: <FinancePage/>,
},

{
  path: "pet-dashboard",
  element: <PetPage/>,
},
{
  path: "privacy",
  element: <PrivacyPage/>,
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
