const express = require("express");
const user = require("./db.json");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req,res)=>{
    // let users = user;
    res.status(200).json(user);
})

app.post("/", (req,res)=>{
    let users = user.push(req.body);
    // FileSystem.writeFileSync(`./db.json`, JSON.stringify(users))
    console.log(req.body);
    res.json(req.body)
    res.status(200).json(users);
});

app.listen(8000, ()=>{
    console.log("Listening to PORT: ", 8000);
})