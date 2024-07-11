const express=require('express')
const app=express();
const db = require('./db');
const menuItem=require('./models/menuItem');
const bodyParser=require('body-parser');
app.use(bodyParser.json());// req body

// app.get('/',function(req,res){
//     res.send('welcome to my server how i can response you ?')
// })

// app.get('/chicken',(req,res)=>{
//     res.send('sure sir ,i would love to serve chicken ')
// })
// app.get('/idle',(req,res)=>{
//     var customizeidle ={
//         name:'rava idle',
//         size:'10 cm diameter',
//         is_Shambhar:'true',
//         is_chutney:'false'
//     }
//     res.send(customizeidle)
// })
 const personroutes=require('./routes/personroutes');
 const menuItemroutes=require('./routes/menuItemroutes');
 app.use('/person',personroutes);
 app.use('/menuItem',menuItemroutes);

app.listen(3000,()=>{
    console.log('listening on port 3000')
})