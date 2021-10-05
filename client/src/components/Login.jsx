import React, { useContext, useState } from 'react';
import {NavLink ,useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContext } from '../App';
const Login = () =>{
    
    const {state,dispatch} =useContext(UserContext);

    const history=useHistory();
    const [userlogin,setuserlogin]=useState({
        email:"",password:""
    })
    let name,value;
    const inputHandler=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setuserlogin({...userlogin,[name]:value});
    }
    const login=async(e)=>{
        e.preventDefault();
        const {email,password}=userlogin;
        const res=await fetch('/loginform',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        })
        const data=res.json();
        if(res.status===400||!data){
        window.alert("Invalid Credentials");}
        else{
            dispatch({type:"USER",payload:true});
            window.alert("login successfull");
            history.push("/contactus");
        }
    }
    return(<>
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-1 mx-auto bg-light">
    <div className="card card0 border-0">
        <div className="row d-flex">
            <div className="col-lg-6">
                <div className="card1 pb-0">
                    <div className="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="https://i.imgur.com/uNGdWHi.png" alt="company logo" className="image" /> </div>
                </div>
            </div>
            <div className="col-lg-6">
                <form className="card2 card border-0 px-4 py-1 pt-5" method="POST">
                    
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Email Address</h6>
                        </label> <input className="mb-4 bg-light" type="text" name="email" placeholder="Enter a valid email address" onChange={inputHandler} value={userlogin.email} style={{ border:0, outline:0}} /> </div>
                    <div className="row px-3"> <label className="mb-1">
                            <h6 className="mb-0 text-sm">Password</h6>
                        </label> <input className="mb-4 bg-light" type="password" name="password" placeholder="Enter password" onChange={inputHandler} value={userlogin.password} style={{ border:0, outline:0}}/> </div><br/>

                    <div className="row mb-3 px-3"> <button type="submit" className="btn btn-info text-center" onClick={login}>Login</button> </div>
                    <div className="row mb-4 px-3"> <small className="font-weight-bold">Don't have an account? 
                     <NavLink className="text-danger" exact  to="/Signup"> register</NavLink>
                </small> </div>
                </form>
            </div>
        </div>
 
    </div>
</div>
    </>);
}
export default Login;