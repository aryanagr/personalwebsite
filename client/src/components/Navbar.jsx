import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from "../image/logo2.jpeg";
import { UserContext } from '../App';
function Navbar() {
  const {state,dispatch} =useContext(UserContext);
if(state){
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light  shadow  pb-0 mb-0 bg-white rounded ">
   <div className="container-fluid">
     <NavLink className="navbar-brand " to="/">
         <img src={logo} width="150px" alt="company logo" />
     </NavLink>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <NavLink className="nav-link"  to="/">Home</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/about">About</NavLink>
         </li>
         
          <li className="nav-item">
            <NavLink className="nav-link"  to="/logout">logout</NavLink>
          </li>
         
         
 
  
       </ul>
     </div>
   </div>
 </nav>
    </>
   );
}
else{
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light  shadow p-3 mb-0 bg-white rounded ">
   <div className="container-fluid">
     <NavLink className="navbar-brand " to="/">
         <img src={logo} width="150px" alt="company logo" />
     </NavLink>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <NavLink className="nav-link"  to="/">Home</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
         </li>
         <li className="nav-item">
           <NavLink className="nav-link" to="/about">About</NavLink>
         </li>

         
          <li className="nav-item">
             <NavLink className="nav-link" to="/login">Login</NavLink>
           </li>
            <li className="nav-item">
             <NavLink className="nav-link"  to="/signup">Sign up</NavLink>
          </li>
        
 
  
       </ul>
     </div>
   </div>
 </nav>
    </>
   );
}
 
}

export default Navbar;
