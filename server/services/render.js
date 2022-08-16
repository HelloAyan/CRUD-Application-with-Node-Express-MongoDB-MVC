const axios = require('axios');

exports.homeRouters = (req, res) =>{
    // Make a get request to /api/user
    axios.get('https://crud-app-mvc.herokuapp.com/api/users')
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
    axios.get('https://crud-app-mvc.herokuapp.com/api/users', {params: {id: req.query.id}})
    .then(function(userdata){
        res.render('update_user', {user: userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}