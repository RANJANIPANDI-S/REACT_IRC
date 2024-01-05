
import React from 'react'
 import './App.css';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Home from './component/Home';
 import Register from './component/register';
 import Logindemo from './component/login';
import DrawerAppBar from './component/navbar';
import Menu from './component/Menu';
import ContactPage from './component/contact';



 const App = () => {
return (
<div className="app">
      <>
      <div>
        <navbar/>
      </div>
      <Router> 
           {/* <nav className='navi'>
              <ul className='Hello'>
                <li className='active'>
                <Link  style={{ textDecoration: 'none' ,color:'white'}}to="/">HOME</Link>
                </li>
                <li className='actives'>
                <Link  style={{textDecoration: 'none ', color:'white'}}to="/Login" >LOGIN</Link>
                </li>
                <li className='activess'>
                <Link  style={{ textDecoration: 'none',color:'white'}}to="/Register">REGISTER</Link>
                </li>
                </ul>
              </nav> */}
               <Routes>
                 /* <Route exact path="/" element={ <Home />}/>
                 {/* //adding / */}
                  {/* <Route path='category' element={<Category/>}/>
                 </Route> */}

                    <Route exact path="/login" element={ <Logindemo />} />
                    <Route path="/register" element={ <Register />} />
                    <Route path="/Menu" element={ <Menu/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                     </Routes>
          
            </Router> 
         
            
            </>
              
         </div>
    )
   }
 export default App;