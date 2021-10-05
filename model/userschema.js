const mongooose=require('mongoose')
const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken')
const userSchema=new mongooose.Schema({
    email:{
        type:String,
        required:true
    },
name:{
    type:String,
    required:true
},

dob:{
    type:String,
    required:true
},
gender:{
    type:String,
    required:true
},
mobilenumber:{
    type:Number,
    required:true
},
password:{
    type:String,
    required:true
},
cpassword:{
    type:String,
    required:true
},
tokens:[
    {
    token:{
        type:String,
    required:true

    }
}
],
messages:[{
    email:{
        type:String,
        required:true
    },
            name:{
                type:String,
                required:true
            },
            
            
            mobilenumber:{
                type:Number,
                required:true
            },
            
            message:{
                type:String,
                required:true
            },
            subject:{
                type:String,
                required:true
            }

}]

})

userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next();
})
userSchema.methods.generateAuthToken= async function (){
    try{
        let token=jwt.sign({_id:this._id},process.env.SECRET_KEY)
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(err){
        console.log(err);
    }
}

userSchema.methods.addMessage = async function(email,name,mobilenumber,message,subject){
    try{
        this.messages = this.messages.concat({email,name,mobilenumber,message,subject});
        await this.save();
        return this.messages;
    }
    catch(err){
        console.log(err);
    }
}

const User=new mongooose.model('USER',userSchema);

module.exports=User;
