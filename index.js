const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
    {id:0, name:"menon",email:"menon@gmail.com"},
    {id:1, name:"momo",email:"momo@gmail.com"},
    {id:2, name:"anwar",email:"anwar@gmail.com"}
]

app.get('/', (req, res) => {
    res.send('welcome from 2nd node!');
  });



app.get('/users', (req,res)=>{
    const search = req.query.search;
    //use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});

//app.method
app.post('/users',(req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log(req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
});


//dynamic api
app.get('/users/:id', (req,res)=>{
    const id =req.params.id;
    const user = users[id];
    res.send(user);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});