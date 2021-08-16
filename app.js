const express = require('express')
const mongoose = require('./db/dbmodels/mongoose')
const balance = require('./db/dbmodels/balance')
const user = require('./db/dbmodels/user')
const app = express()
// ///
// const path = require("path");
// const router = express.Router();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/user');
// ///
app.use(express.json())
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin","X-Requested-With", "Content-Type", "Accept")
    next()
    })
app.listen(3000, () => console.log("Listening on port 3000"))
// db.test.insertOne( { ts: new Timestamp() } );
// app.post('/user/login',(req,res)=>{
//     const user=user.findByCredentials(req.body.mailid,req.body.password)
//     .save()
//     .then((user)=>{
//         console.log(user)
//         res.send(user)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/myuser', async (req, res) => {
//     try {
//      const user = await user.findByCredentials(req.body.mailid, req.body.password);
//      const token = await user.generateAuthToken();
//      res.send({ user, token });
//     } catch (e) {
//      res.status(400).send({
//       error: { message: 'You have entered an invalid username or password' },
//      });
//     }
// });
app.post('/myuser', (req, res) => {
    (new user({'name': req.body.name, 'age' : req.body.age,'mailid':req.body.mailid,'income':req.body.income}))
    .save()
    .then((user)=> 
    {
        console.log(user) 
        res.send(user)
    })
    .catch((error) => console.log(error))
})


app.post('/myuser/:myuserId/balance', (req, res) =>{
    (new balance ({'name': req.body.name,'groceries':req.body.groceries,'total':req.body.medicines+req.body.clothes+req.body.entertainment+req.body.services_and_bills+req.body.travelling+req.body.others,'medicines':req.body.medicines,'clothes':req.body.clothes,'entertainment':req.body.entertainment,'services_and_bills':req.body.services_and_bills,'travelling':req.body.travelling,'others':req.body.others,'_userId': req.params.myuserId }))
    .save()
    .then((balance) => res.send(balance))
    .catch((error) => console.log(error))
})

app.get('/myuser', (req, res) =>{
        user.find({})
        .then((user) =>
            {
            console.log(user) 
            res.send(user)
        })
        .catch((error) => console.log(error))
    })
    app.get('/myuser/:myuserId', (req, res) =>{
        balance.findOne({_userId: req.params.myuserId })
        .then((balance)=>
        {
            console.log(balance)
            res.send(balance)
            })
        .catch((error) => console.log(error))
    })  
    app.patch('/myuser/:myuserId', (req, res) =>{
        balance.findOneAndUpdate({ _userId : req.params.myuserId }, {$set: req.body})
        .then((balance)=>
        {
            console.log(balance)
            res.send(balance)
            })
        .catch((error) => console.log(error))
        })
    app.delete('/myuser/:myuserId', (req, res) => {
        balance.findOneAndDelete({_userId: req.params.myuserId}).then((balance) => res.send(balance))
        .catch((error) => console.log(error))
}   )