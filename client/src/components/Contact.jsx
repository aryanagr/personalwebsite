import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
function Contact() {
  const history=useHistory();
  const [contactdata,setconatctdata]=useState({email:"",name:"",mobilenumber:"",message:""});

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
      const data =await res.json();
      console.log(data);

      if(!res.status===200){
        const error =new Error(res.error);
        throw error;
      }
      setconatctdata({...contactdata,name:data.name,email:data.email,mobilenumber:data.mobilenumber})

    }
    catch(err){
      console.log(err);
      history.push('/login');
    }
  }

useEffect(()=>{
 callAboutPage();
}, []);


const contactform= async (e)=>{
e.preventDefault();
const{email,name,mobilenumber,message}=contactdata;
const res = await fetch('./contactform',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({email,name,mobilenumber,message})
})
const data=await res.json();
if(!data)alert("something got wrong message not sent");
else {alert("message send");setconatctdata({...contactdata,message:""})}
}
 
  let name,value;

  const inputHandler=(e)=>{
     name=e.target.name;
      value=e.target.value;
   setconatctdata({...contactdata,[name]:value})
  }
  return (
   <>
   <div style={{ background: "linear-gradient( to right,#bdc3c7 , #2c3e50"}}>
   <div className="bg-light container p-0 shadow mb-0 " >
     <div className="row">
     <h5 className="card-title col-lg-10 offset-lg-1 my-5">Talk to us...</h5>
       <div className=" col-lg-10 offset-lg-1">
       <form id="contact" method="POST">
          <div className=" bg-light d-flex justify-content-between align-items-between">
        <input className=" w-25" type="text" placeholder="name" id="contactname" onChange={inputHandler}  name="name" value={contactdata.name} style={{ border:0, outline:0}}/>
        <input className=" w-25" type="email" placeholder="email" id="conatctemail" onChange={inputHandler}  name="email" value={contactdata.email}  style={{  border:0,outline:0}}/>
        <input className=" w-25" type="text" placeholder="phone number" id="contactnumber" onChange={inputHandler}  name="mobilenumber" value={contactdata.mobilenumber}  style={{   border:0,outline:0}}/>
          </div>

          <div className=" w-100">
            <textarea className="w-100   my-5 mb-3" id="" cols="30" rows="10" placeholder="messgae..." onChange={inputHandler} name="message" value={contactdata.message} ></textarea>


          </div>
          <button className="btn btn-light btn-outline-secondary mb-5" type="submit" onClick={contactform}> submit</button>
          </form>
       </div>
     </div>

   </div>
   </div>
   </>
  );
}

export default Contact;
