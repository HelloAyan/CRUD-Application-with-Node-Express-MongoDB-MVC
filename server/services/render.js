exports.homeRouters = (req, res) =>{
    res.render("index.ejs"); 
}

exports.addUser = (req, res) =>{
    res.render("add_user"); 
}

exports.updateUser = (req, res) =>{
    res.render("update_user"); 
}