const express = require('express');
const app = express();
const port = 5500;
const mongoDB = require('./db');
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

const User = require('./models/User'); // Adjust the path to your User model

app.get("/", function(req, response) {
    response.send("Hello World!");
});

app.use(express.json());

app.use('/api', require('./Routes/createUser'));

// Add a new route to fetch users
app.get("/fetchUsers", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, function() {
    console.log(`Server Listening To Port ${port}`);
});
