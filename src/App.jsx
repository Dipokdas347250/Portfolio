import About from "./components/About"
import RootLayout from "./components/RootLayout"
import Cv from "./pages/Cv"
import Home from "./pages/Home"
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Pages27 from "./pages/Pages27"
import Portfolio from "./components/Portfolio"
import Contacts from "./components/Contacts"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={ <Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Portfolio" element={<Portfolio/>}></Route>
    <Route path="/Contacts" element={<Contacts/>}></Route>
   
    {/* <Route path="/Cv" element={<Cv/>}></Route> */}
  </Route>
))







function App() {


  return (
    <>
   
   <RouterProvider router={router}/>
    
    </>
  )
}

export default App
