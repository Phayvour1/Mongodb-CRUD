const { application } = require('express')
const user = require('../model/user')

exports.getAllUsers = async(req, res) =>{
    try {
        let users = await user.find();
        res.status(200).json
        success: true;
        message: "users found",
        users
    } catch (error) {
        res.status(500).json({
        success: false,
        message: "internal server error",
        error: error.message
    })
    }
}
 

