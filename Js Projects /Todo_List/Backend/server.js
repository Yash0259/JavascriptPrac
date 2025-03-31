require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const taskRoutes = require('./src/Routes/TaskRoutes');
const connectDB = require('./src/config/db');

app.use(cors()); //enable cors for frontend
app.use(express.json()); //parse incoming JSON requests

//check if env variables are loaded
if (!process.env.PORT) {
	console.error("⚠️  Warning: .env file not loaded correctly.;")
}
//connect to the database 
connectDB();

//use task routes 
app.use('/api', taskRoutes);   // Prefix routes with /api

//start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})

//define a test api route (optional)
app.get('/',(req,res)=>{
	res.json({status:true,id:"b826"});
})

