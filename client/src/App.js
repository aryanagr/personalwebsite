import React,{createContext, useReducer} from 'react';
import Navbar from './components/Navbar';
import { Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Logout from './components/Logout';
import { initialState,reducer } from './reducer/Usereducers';

export const UserContext=createContext();
function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
 
  return (
  <>
  <UserContext.Provider value={{state,dispatch}}>
  <Navbar />
  <Route exact  path='/'><Home className="bg-light" /></Route>
  <Route  path='/about'><About className="bg-light" /></Route>
  <Route  path='/login'><Login className="bg-light" /></Route>
  <Route  path='/contactus'><Contact className="bg-light" /></Route>
  <Route  path='/signup'><Signup className="bg-light" /></Route>
  <Route  path='/logout'><Logout className="bg-light" /></Route>
  <Footer/>
  </UserContext.Provider>

  </>
  );
}

export default App;
