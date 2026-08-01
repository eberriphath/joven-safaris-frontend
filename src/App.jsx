import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PackageDetails from "./pages/PackageDetails";
import BookNow from "./pages/BookNow";
import Experiences from "./pages/Experiences";

function App() {

  return (

    <BrowserRouter>

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
        

      </Routes>


    </BrowserRouter>

  );

}

export default App;