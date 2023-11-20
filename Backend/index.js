import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/myLoginRegisterDB')
    .then(()=>{
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

app.post('/login', async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = User.findOne({email: email});
        if(user){
            if(password === user.password){
                res.send({message: "Login Successfull", user: user})
                console.log("Passwo are match")
            }else{
                res.send({message: "Password did't match"})
                // alert("Wrong pass")
                console.log("Passwo not match")
            }
        }else{
            res.send({message: "User Not Registered"})
        }
    } catch (error) {
        
    }
})

app.post("/register", async (req, res) =>{
    const {name, email, password} = req.body;

    try {
        const user = await User.findOne({email: email});

        if(user){
            res.send({message: "User Already Registered"})
        }else{
            const user = new User({
                name,
                email,
                password
            });

            await user.save();
            res.send({message: "Successfully Registered"})
        }
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
})

