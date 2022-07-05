const axios = require('axios');

exports.homeRouters = (req, res) =>{
    // Make a get request to /api/user
    axios.get('http://localhost:3000/api/users')
    .then(function (response){
        
        res.render("index.ejs", {user: response.data});
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.addUser = (req, res) =>{
    res.render("add_user"); 
}

exports.updateUser = (req, res) =>{
    res.render("update_user"); 
}