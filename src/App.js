import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
import Products from "./Products"
import SingleProduct from "./SingleProduct"
import Cart from "./Cart"
import ErorrPage from "./ErorrPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

  const theme={
    colors:{
      bg:"#F6F8FA",
      footer_bg :" #0a1435",
      btn:"rgb(98 84 243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:
      "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)" ,

    },
    media:{
      mobile : "768px",
      tab: "998px"
    }
  }
  return( 
    <ThemeProvider theme={theme}>
      <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<ErorrPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    </ThemeProvider>
  )

};

export default App;
