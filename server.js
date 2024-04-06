// Setup empty JS object to act as endpoint for all routes
projectData = {};
const port = 8000;

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));

app.post('/weatherData',(reqi,res)=>{
    const data =reqi.body;
    projectData={
    temperature : data.temperature,
    description : data.description
};
    console.log('weather data storead',data);
    res.send('weather data reciived and storead seccusfully');


});
app.get('/weatherData', (req, res) => {
    res.json(projectData);
    });
//post
app.post('/weatherData', (req, res) => {
    const data = req.body;
    projectData = {
        temperature: data.temperature,
        description: data.description,
        date: new Date().toLocaleDateString()
    };
    res.send('Weather data received and stored successfully');
});
//get 
app.get('/weatherData', (req, res) => {
    res.json(projectData);
});
// Setup Server
app.listen(port,()=>{console.log('server is running')})