const axios = require('axios');

exports.homeRouters = (req, res) =>{
    // Make a get request to /api/users
    res.render("index.ejs", {user: "New Data"}); 
}

exports.addUser = (req, res) =>{
    res.render("add_user"); 
}

exports.updateUser = (req, res) =>{
    res.render("update_user"); 
}