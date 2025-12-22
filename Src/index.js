import dotenv from "dotenv";
import app from "./app.js"; 
import connectDb from "./db/index.js";

dotenv.config({
    path: "./.env",
});

connectDb()
.then(() =>{
    const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
    
})
.catch((err)=>{

    console.error("mongo connection error",err)
    process.exit(1);


    
})



