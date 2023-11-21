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

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        console.log(user);

        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user });
                console.log("Password matches");
            } else {
                res.send({ message: "Password didn't match" });
                console.log("Password doesn't match");
            }
        } else {
            res.send({ message: "User Not Registered" });
        }
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});




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

