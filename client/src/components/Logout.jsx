import React, { useEffect,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';

  

const Logout=()=>{
    const histort=useHistory(); 
    const {state,dispatch} =useContext(UserContext); 
useEffect(()=>{
   
    fetch('/signout',{
        method:"GET",
            headers:{
                Accept:"application/json",
                "Content-type":"application/json"
            },
           credentials:"include"
    }).then((res)=>{
        console.log("hello useeffect");
        dispatch({type:"USER",payload:false});
      histort.push('/login',{replace:true});
      if(!res.status===200){
          const error =new Error(res.error);
          throw error;
      }
    }).catch((err)=>{
        console.log(err);
    })
})
    return(<>
   
    </>);
}
export default Logout;