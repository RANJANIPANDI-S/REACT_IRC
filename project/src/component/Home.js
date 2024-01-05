import React from "react";
import DrawerAppBar from "./navbar";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import image from './image.jpg';
 import Sidebar from './Sidebar';

const Home = () =>{
  return(
    
    <div >
      <img src={image} width={1500} height={450}/> 
      <h1>Welcome to E-book store</h1>
      <h2><center>"Today a reader, tomorrow a leader."</center></h2>
      <DrawerAppBar/>
      <Outlet/>
         <Sidebar/>    
      <Footer/>
     
    </div>
  )
}
export default Home;