
const mongoose= require("mongoose")
 const  express = require("express")
 const bodyParser = require("body-parser")
 const dotenv = require("dotenv")
 const cors = require('cors')
 
 const userRoutes = require('./routes/users')
 
 dotenv.config()

 const app = express()
 app.use(cors());
 app.use(bodyParser.urlencoded())
 app.use(bodyParser.json())
app.use(userRoutes)


const corsOptions = {
    credentials: true,
    origin: "https://front-end-omega-ebon.vercel.app/",
  };
  app.use(cors(corsOptions));
  



const db = process.env.DATABASE;

 mongoose.connect(db)
.then(()=>{
console.log("CONNECTION SUCCESFULLY TO DB")

}).catch((err)=>{
console.log(err)

})

app.get("/" ,(req,res)=>{
    res.send("WELCOME TO SOCIAL MEDIA APP")
    
    })

    app.get("/login" , async(req,res)=>{

 
const{email,password} = req.body;

if(!email || !password){
res.json({message:"plz fill the data"})
}


try{
 const userlogin = await userRoutes.findOne({email:email})
if(!userlogin){
res.json({error:"user error"})

}else{
    res.json({message:"user login successfully"})
}
}catch(err){
console.log(errr)
}


    })


 app.listen(4000,()=>{
console.log("listen to 4000")
})