// First of install (npm inti -y)
// Second install express (npm i express)
// Third set this code Given Below

//--------------------------------------------//
// import express from "express"; //Way One 
const express = require('express') // Way Two Use Any Method
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});



app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})
//----------------------------------------------//

// Fourth Create Command For Live Server Using Package.json Then Create start/dev in json file then using npm run start/dev to Live Server Start
// Last Step install nodemon using (npm i nodemon) then put in package.json script start/dev "nodemon index.js"
// Complete Setup localhost:3000