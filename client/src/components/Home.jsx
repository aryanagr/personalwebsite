import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../App';
import  { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';

function Home() {

  const {state,dispatch} =useContext(UserContext);
  const history=useHistory();
  const [data,setdata]=useState({});

  const callAboutPage = async () =>{
    try{
      const res= await fetch('/getdata',{
        method:"GET",
 
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
      },
        credentials:"include"
      })
      setdata(await res.json());
     

      if(!res.status===200){
        const error =new Error(res.error);
        throw error;
      }
    

    }
    catch(err){
      console.log(err);
     
    }
  }

useEffect(()=>{
 callAboutPage();
}, []);
  if(state)
  return (
  <div className="p-0 m-0"  style={{ background: "linear-gradient( to right,#bdc3c7 , #2c3e50", "height":"500px"}}>
   <div class="position-absolute bottom-50 start-50 translate-middle"><h2> Welcome {data.name} </h2></div>
   <div class="position-absolute top-50 start-50 translate-middle"><h2>to your personalize home page</h2></div></div>
  );
  else 
   return (
    <div className="p-0 m-0"  style={{ background: "linear-gradient( to right,#bdc3c7 , #2c3e50", "height":"500px"}}>
     <div class="position-absolute top-50 start-50 translate-middle"><h1> Welcome to Home page   </h1></div>
    </div>
    );
}

export default Home;
