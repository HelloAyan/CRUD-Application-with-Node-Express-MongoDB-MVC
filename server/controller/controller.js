const userDB = require('../model/model');

// create and save new user
exports.create = (req, res)=>{
    // validate request
    if(req.body){
        res.status(400).send(
            {message: "Content can not be empty!"}
        )
        return;
    }

}

// retrive and return all users/ retrive and return a single user
exports.find = (req, res)=>{

}

// Update a new identified user by user id
exports.update = (req, res)=>{

}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    
}