import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/myLoginRegisterDB', 
    {useNewUrlParser: true, useUniFiedTopology: true}).then(()=>{
        console.log("Connected to MongoDB")

        app.listen(9002, ()=>{
            console.log("Be Started at port 9002")
        })
    }).catch((error)=>{
        console.error("Error: ", error)
    })

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String

})

const User = new mongoose.model("User", userSchema)

// Routes

// app.get('/', (req, res)=>{
//     res.send("My api")
// })

app.post('/login', (req, res)=>{
    res.send("My Login api")
})

app.post('/register', (req, res)=>{
    res.send("My Register api")
})


