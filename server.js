const express = require('express');
const app = express(); 

const PORT = process.env.PORT || 5000
//middllers
app.set('view engine', 'ejs');
app.get('/', (req,res)=> {


    res.render('index');
}); 

app.get('/login', (req,res)=>{
    res.render('login');
})

app.listen(PORT, ()=>{ 

    console.log(`Server rodando na porta ${PORT}`);
});
