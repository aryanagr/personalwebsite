const express =require('express');
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
require('../db/conn')
const User=require('../model/userschema')
const authenticate=require("../middelware/authenticate");
var cookieParser = require('cookie-parser')
router.use(cookieParser());



router.get('/', (req,res)=>{
    res.send("hello");
})

router.post('/register',async (req,res)=>{
const {email,name,dob,mobilenumber,password,cpassword}=req.body;


if(  !email||!name|| !dob||!mobilenumber||  !password|| !cpassword){
    res.status(422).send({error:"plzz filled every column"});
}



try{
    const userExist= await User.findOne({email:email});

    if(userExist)return res.status(422).send({error:"user exist"});
    else if(password!=cpassword)return res.status(422).send({error:"password not match"});
    else{
        const user=new User({email,name,dob,mobilenumber,password,cpassword});

        const userRegister=await user.save();
        
        if(userRegister) res.status(201).json({message:'done storing'});
        else res.status(500).json({error:"failed"});
    }

  
}

catch(err){console.log(err);}

})
router.post('/loginform',async (req,res)=>{
    const {email,password}=req.body;
    if(email==""||password=="") res.status(400).send({error:"plzz filled every column"});

    
try{
    const userLogin= await User.findOne({email:email});
    if(!userLogin)return res.status(400).send({error:"  invalid credentials"});
    else{
    const  isMatch=await bcrypt.compare(password,userLogin.password);

    const token=await userLogin.generateAuthToken();
    
    res.cookie("jwtoken",token);
   

    if(!isMatch)return res.status(400).send({error:"  invalid credentials pass"});
    res.send({message:"login successfully"});
    
}

    

   
  
}

catch(err){console.log(err);}

})


router.get('/getdata',authenticate, async(req,res)=>{
    res.send(req.rootUser);
    



})
router.get('/signout', async(req,res)=>{
    console.log("hello signout")
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("user logout");
    
    
    })

router.post('/contactform',authenticate, async (req,res)=>{
    
    try{
        const{email,name,mobilenumber,message}=req.body;

        if(!name||!email||!mobilenumber||!message){
            return res.json({error:"plzz fill contact form"});
        }
        
        const userContact = await User.findOne({ _id: req.userID});
        if(userContact){
            const userMessage= await userContact.addMessage(name,email,mobilenumber,message)
        }
        await userContact.save();
        res.status(201).json({message:"user message send successfully"})

    }
    catch(err){
        console.log(err);
    }
    
    
    })
module.exports=router;