const express = require('express')
const app =express()


const mongoose = require('mongoose')
const url="mongodb+srv://AnandKumar:CHAURASIYA@cluster0.uxgsm.mongodb.net/LaundryServiceProject?retryWrites=true&w=majority"
//connecting to DB
mongoose.connect('mongodb+srv://AnandKumar:CHAURASIYA@cluster0.uxgsm.mongodb.net/LaundryServiceProject?retryWrites=true&w=majority',{ useNewUrlParser: true }).then( () => console.log("MongoDB Connected")).catch( (err) => console.log("MongoDB error"))


//external middleware
const cors = require('cors')
app.use(cors())

//built-in middleware
app.use(express.json())


//user routes
app.use( require("./routes/auth"))

//orders routes
app.use("/order" ,require("./routes/orders"))


const PORT= 5000

//creating server
app.listen(PORT,()=>{
    console.log(`app is listing at port ${url}`);
})