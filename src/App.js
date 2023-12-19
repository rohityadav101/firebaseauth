import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import NoData from "./NoData";
import Home from "./Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailPage from "./DetailPage ";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<DetailPage/>} />
          <Route path="*" element={<NoData />} />{" "}
          {/* This catches all other routes */}
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
