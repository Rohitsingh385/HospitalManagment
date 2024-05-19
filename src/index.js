const express = require('express');
const app = express();
const hbs = require('hbs')
const path = require('path');
const collection = require('./mongodb')
const PORT = 8000;

// Serve static files from the 'public' directory
app.use('/assets',express.static('assets'));
app.use(express.json());
app.set("view engine", "hbs");
app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
	res.render("login")
})

app.get('/signup',(req,res)=>{
	res.render("signup")
})

app.post('/signup', async(req,res)=>{
	const data = {
		name: req.body.name,
		password: req.body.password
	}

	await collection.insertMany([data])

	res.render("home")
})

app.post('/login', async(req, res)=>{
	
	try{
		const check = await collection.findOne({name:req.body.name})

		if(check.password==req.body.password){
			res.render("home")
		}else{
			res.render("wrong password");
		}
	}catch{
		res.render("wrong details");
	}
})

app.get('/doctors', (req, res) => {
    res.render('doctors');
});



app.listen(PORT, (err)=>{
	if(err){
		console.log("app cannot listen on port", `${PORT}`);
	}else{
		console.log("app is listening on port", `${PORT}`)
	}
})