import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";



function App(){


return(

<BrowserRouter>


<Routes>


{/* Homepage */}

<Route

path="/"

element={<Home/>}

/>




{/* Individual package page */}

<Route

path="/packages/:id"

element={<PackageDetails/>}

/>


</Routes>


</BrowserRouter>


)

}


export default App;