import React from "react";
import ReactDom from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Footer from "./components/Footer";

const a=ReactDom.createRoot(document.getElementById("root"))

a.render(
  <div>
    <Header/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Footer/>
  </div>
)