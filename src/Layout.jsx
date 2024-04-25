import React from 'react';
import { Outlet } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
function Layout(){
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default Layout;