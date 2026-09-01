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
import CarRental from "./pages/CarRental";
import Services from "./pages/Services";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";


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

        <Route
          path="/car-rental"
          element={<CarRental />}
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
         path="/services"
         element={<Services />}
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

        <Route
         path="/terms-and-conditions"
         element={<TermsAndConditions />}
        />

        <Route
         path="/privacy-policy"
         element={<PrivacyPolicy />}
        />

      </Routes>


    </BrowserRouter>

  );

}

export default App;