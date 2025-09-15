const express=require('express');
const app=express();
const port=3000;

//Membuat route untuk halaman home
app.get('/',(req,res)=>{
    res.send('Hello, ini halaman home dengan method get!');
});

//membuat middleware untuk menerima request body dari JSON
app.use(express.json());

//membuat route ke halaman submit dengan method POST
app.post('/submit',(req,res)=>{
    const {name,npm,jeniskelamin}=req.body.name;
    req.send(`Hello, ${name} dengan NPM ${npm} dan jenis kelamin ${jeniskelamin}`);
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});

app.get('/text',(req,res)=>{

    res.send('Ini adalah respon text.');
}   );

app.get('/html',(req,res)=>{

    res.send('<h1>Ini adalah respon HTML</h1>');
}   );
app.get('/json',(req,res)=>{

    res.json({message:'Ini adalah respon JSON'});
}   );

//Serving Static Files
app.use(express.static('public'));
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/index.html`);
});