import { useState, useEffect } from "react"
import axios from 'axios'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Home from './Home.jsx'
import RootLayout from "./layouts/RootLayout.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
