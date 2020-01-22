const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex')

const db = knex({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Pimping1!',
    database : 'HM-EmailList'
  }
});



const app = express();




app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());




app.post('/', (req, res)=>{
  const {name, dob, email}= req.body;
    db('leads').returning('*').insert({ name:name, dob:dob, email:email}).then(user =>{
      res.json(user[0]);
    })
    .catch(err=> res.status(400).json('unable to enter'))
})






app.get('/', (req, res)=>{
res.send('still working')
})

app.listen(3000, ()=>{
    console.log('working')
})

