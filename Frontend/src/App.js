// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Appliances from "./pages/Appliances";
import HowItWorks from "./pages/HowItWorks";
import AddItem from "./pages/AddItem";

import Signup from "./pages/SignUp";
import ListedItem from "./pages/ListedItem";
import ContactAndFeedback from "./pages/ContactAndFeedback";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appliance" element={<Appliances />} />
        <Route path="/howitworks" element={<HowItWorks />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/AddItem" element={<AddItem />} />
        <Route path="/ListedItem" element={<ListedItem />} />
        <Route path="/contactUs" element={<ContactAndFeedback />} />
        <Route path="/TeamPage" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
