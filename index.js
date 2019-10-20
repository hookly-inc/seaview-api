const express = require('express'); 
const axios = require('axios');
var config = require('./config');
const app = express();
/*
the return is a function with 2 parameters (type,coordinates)
type being the type of the request (Example: locations or path)
for details about types check https://developers.google.com/maps/documentation/elevation/intro
coordinates is the coordinate(s) for the query
 (Example for locations: "39.7391536,-104.9847034")
 (Example for paths: "40.714728,-73.998672|-34.397,150.644")
*/

//console.log(config("locations","39.7391536,-104.9847034"));
//console.log(config("paths","40.714728,-73.998672|-34.397,150.644"));

app.get('/locations', async ( req,res ) => {
    try{
        let apiData = await axios.get(config("locations","39.7391536,-104.9847034") ); 
        let result = Object.values(apiData.data.results);
        res.send(result);
    }catch(err){
        res.send(err);
    }
    
});

app.get('/paths', ( req,res ) => {

});



    app.listen(3000);