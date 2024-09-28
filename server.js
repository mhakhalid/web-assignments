/**********************************************************************************
 BTI325 – Assignment 1
 I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 No part of this assignment has been copied manually or electronically from any other source
 (including web sites) or distributed to other students.
 Name: Muhammad Hamid Ali Khalid  Student ID: 166000232  Date: 2024-09-27
 Online (Vercel) URL: [Your Vercel Deployment URL]
 *********************************************************************************/

 const express = require('express');
 const app = express();
 const port = process.env.PORT || 3000;
 
 // Route to handle GET request for the root URL
 app.get('/', (req, res) => {
   res.send('Muhammad Hamid Ali Khalid - 166000232');
 });
 
 // Start the server
 app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });
 