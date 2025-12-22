import express from "express";
import cors from "cors";
 
const app = express();
// basic middleware configuration
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
// cors configuration
app.use(cors({
    origin:process.env.CORS_ORIGIN?.split(",")  || "HTTP://localhost:3000",
    
    methods:["GET","POST","PUT","DELETE"],
    aloowedHeaders:["Content-Type","Authorization"],
    credentials:true  
    
}));
//import routes
// import healthcheckRouter from "../Src/controllrs/helthcheck-controllers.js";
// app.use("/api/v1/healthcheck ", healthcheckRouter )
    app.get("/",(req,res)=>{
    res.send("Welcome to Basecampy");
     })

    app.get("/check",(req,res)=>{
    res.send("Server is up and running");
    

})


export default app;