const mongoose=require('mongoose')
const validator = require('validator');
const { string } = require('yargs');
const Express = require("express");
const BodyParser = require("body-parser");
const Bcrypt = require("bcryptjs");


const userSchema=new mongoose.Schema({
    timestamp: { type: Date, default: Date.now},
    name:{
        type : String,
        trim: true,
        minlength: 3
    },
    age: {

        type:Number,
        default:0,
        validate(value){
        if(value<0){
            throw new Error('age should be a positive number')
            }
        }
    },
    mailid: {
        type: String,
        unique:true,
        required: true,
        trim: true,
        lowercase: true,
        // ,validate(value) {
        // if (!validator.isEmail(value)) {
        //         throw new Error('Email is invalid')
        //     }
        // }
    },
    // password:{
    //     type:String,
    //     trim:true,
    //     validate(value){
    //         if(value.toLowerCase().includes('password'))
    //         {
    //             throw new Error('password cannot be"password')
    //         }
    //     }
    //     // Bcrypt.hash(password,8)
    // }


})
userSchema.index();
const person = mongoose.model('user', userSchema)
module.exports = person