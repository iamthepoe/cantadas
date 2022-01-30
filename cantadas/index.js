const express = require("express");
const app = express();
app.set("view engine", "ejs"); 

app.get("/", function(req,res){
	var cantadas = ["BLABLABLA - 0","BLABLABLA - 1", "BLABLABLA - 2", "BLABLABLA - 3",
	"BLABLABLA - 4", "BLABLABLA - 5", "BLABLABLA - 6", "BLABLABLA - 7"];
	var numerocantada = Math.floor(Math.random() * cantadas.length);
	res.render("index.ejs", {
		cantadas: cantadas,
		numero: numerocantada,
	});
});

app.listen(8181,()=>{console.log("App rodando!");});