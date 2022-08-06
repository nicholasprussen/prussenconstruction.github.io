import React from 'react';
import './App.css';
import { Outlet, useOutlet } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';

function App() {
  const outlet = useOutlet();

  return (
    <div className="w-full min-h-full grid grid-rows-[auto_1fr_auto]">
      <Header />
      {
        outlet ||
        <Home />
      }
      <Footer />
    </div>
  );
}

export default App;
