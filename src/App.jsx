import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";
import BookNow from "./pages/BookNow";
import Experiences from "./pages/Experiences";
import Kenya from "./pages/Kenya";
import Dubai from "./pages/Dubai";
import SouthAfrica from "./pages/SouthAfrica";
import EastAfrica from "./pages/EastAfrica";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";

function App() {

  return (

    <BrowserRouter>
    <ScrollToTop />
    <ScrollToHash />

      <Routes>

        {/* =========================
            HOME PAGE
        ========================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            GENERAL BOOKING PAGE
        ========================== */}

        <Route
          path="/book-now"
          element={<BookNow />}
        />


        {/* =========================
            INDIVIDUAL SAFARI PAGE
        ========================== */}

        <Route
          path="/packages/:id"
          element={<PackageDetails />}
        />

        <Route
         path="/experiences"
         element={<Experiences />}
        />
        
        <Route
          path="/destinations/Kenya"
          element={<Kenya />}
        />

        <Route
         path="/destinations/dubai"
         element={<Dubai />}
        />

        <Route
         path="/destinations/south-africa"
         element={<SouthAfrica />}
        />

        <Route
         path="/destinations/east-africa"
         element={<EastAfrica />}
        />        

      </Routes>


    </BrowserRouter>

  );

}

export default App;