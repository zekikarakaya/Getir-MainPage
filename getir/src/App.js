import React,{useState,useEffect} from 'react';
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import { MainContext } from './context';
import "./input.css";
import Categories from './components/Categories';
import {categoriesdata} from "./categoriesdata";
import Campaign from './components/Campaign';
import Favorites from './components/Favorites';
import Phone from './components/Phone';
import Card from './components/Card';
import { Footer } from './components/Footer';
function App() {

  return (
    <div className="App">
      
   <Header></Header>
   <Herosection></Herosection>
   <Categories categoriesdata={categoriesdata}></Categories>
   <Campaign></Campaign>
   <Favorites></Favorites>
   <Phone></Phone>
   <Card></Card>
   <Footer></Footer>
    </div>
  );
}

export default App;
