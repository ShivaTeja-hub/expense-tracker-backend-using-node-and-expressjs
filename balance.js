const mongoose=require('mongoose')
const validator = require('validator')

console.log('stores income groceries medicines clothes entertainment services_and_bills,travelling details ')
const expenditureSchema=new mongoose.Schema({
    // income:{
    //     type: mongoose.Types.income,
    //     required: true
    // },
    groceries:{
        type:Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('expenditure cannot be negative')
            }
        }       
    },
    medicines:{
        type:Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('expenditure cannot be negative')
            }
        }       
    },
    clothes:{
        type:Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('expenditure cannot be negative')
            }
        }       
    },
    entertainment:{
        type:Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('expenditure cannot be negative')
            }
        }       
    },
    services_and_bills:{
        type:Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('expenditure cannot be negative')
            }
        }       
    },
    travelling:{
        type:Number,
        default : 0,
        validate(value){
            if(value<0){
                throw new Error('expenditure cannot be negative')
            }
        }       
    },
    others:{
        type:Number,
        default:0,
    },
    total:{
        type:Number,
       // default:  { $sum: { $add: ["$groceries", "$medicines","$clothes","$entertainment","$services_and_bills","$travelling","$others"] } }
    },
    _userId:{
        type: mongoose.Types.ObjectId,
        required: true
        }

})

const expenditure = mongoose.model('balance', expenditureSchema)
module.exports = expenditure