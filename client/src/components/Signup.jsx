import React, { useState } from 'react';
import {NavLink,useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';



const Signup = () =>{
   const history=useHistory();
    const [userdata,setuserdata]=useState({
        email:"",name:"",dob:"",gender:"",mobilenumber:"",password:"",cpassword:""
    });


    let name,value;
    const inputHandler=(e)=>{
     name= e.target.name;
     value=e.target.value;
     setuserdata({...userdata,[name]:value});

     
    }

    const postdata= async(e)=>{
        e.preventDefault();
        const {email,name,dob,gender,mobilenumber,password,cpassword}=userdata;
          const res=await fetch("/register",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              },
              body:JSON.stringify({
                email,name,dob,gender,mobilenumber,password,cpassword
              })
          });
          const resp=await res.json();
          if(res.status===422|| !resp){window.alert("invalid registration"); }
          else {window.alert(" registration successfull");console.log("registration successfull");history.push("/login")}
    }

    return(<>

    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-0 mx-auto bg-light"  style={{ background: "linear-gradient( to right,#bdc3c7 , #2c3e50"}}>
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-0">
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png"  alt="company logo"className="image" /> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <form className="card2 card border-0 px-4 py-0 pt-5" method="POST">
                    
                    <div className="row px-3 mb-2"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label> <input  className="mb-4 bg-light"  type="email" name="email" placeholder="Enter a valid email address"  onChange={inputHandler} value={userdata.email} style={{ border:0, outline:0}}/> </div>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Name</h6>
                        </label> <input  className="mb-4 bg-light" type="text" name="name" placeholder="Enter your name"  onChange={inputHandler} value={userdata.name} style={{ border:0, outline:0}}/> </div> <br/>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">DOB</h6>
                        </label> <input  className="mb-4 bg-light" type="date" name="dob" placeholder="Enter your date of birth"  onChange={inputHandler} value={userdata.dob} style={{ border:0, outline:0}}/> </div> <br/>
                         
                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Gender</h6>
                        </label>
                         <select className="mb-4 bg-light"  value={userdata.gender} onChange={inputHandler} name="gender" style={{ border:0, outline:0}}>
                            <option value="">plzz select your gender</option> 
                            <option value="NA">NA</option>
                             <option value="Male">Male</option>
                             <option value="Female">Female</option>
                             <option value="Other">Other</option>    
                        </select> </div> <br/>
                        
                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Phone number</h6>
                        </label> <input  className="mb-4 bg-light" type="number" name="mobilenumber" placeholder="Enter your phone number"  onChange={inputHandler} value={userdata.mobilenumber} style={{ border:0, outline:0}}/> </div> <br/>

                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <input  className="mb-4 bg-light" type="text" name="password" placeholder="Enter password" onChange={inputHandler} value={userdata.password}  style={{ border:0, outline:0}}/> </div><br/>

                        <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm"> Confirm Password</h6>
                        </label> <input  className="mb-4 bg-light" type="password" name="cpassword" placeholder="Enter  confirm password"  onChange={inputHandler} value={userdata.cpassword} style={{ border:0, outline:0}}/> </div><br/>

                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-info text-center" onClick={postdata}>Register</button> </div>
                    <div className="row mb-4 px-3"> <small className="font-weight-bold"> have an account!  
                     <NavLink className="text-danger" exact  to="/Login"> login</NavLink>
                </small> </div>
                </form>
            </div>
        </div>
 
    </div>
</div>

    </>);
}
export default Signup;