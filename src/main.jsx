import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider,createBrowserRouter} from "react-router-dom";
import About from './pages/about.jsx';
import RootLayout from './components/RootLayout/RootLayout.jsx';

const router= createBrowserRouter ([
  {
  path: '/',
  element : <RootLayout/>,
  children:  [
    {
      path: '/about',
      element: <About/>
    }
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)