import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import useAOS from "./hooks/useAOS";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useAOS();
  return (
    <div>
      <Header />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
