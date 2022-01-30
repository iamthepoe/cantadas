const express = require("express");
const app = express();
app.set("view engine", "ejs"); 

app.get("/", function(req,res){
	var cantadas = ["Se você fosse uma variável, seria um ponteiro que aponta para o endereço de memória do meu coração","Você é a chave estrangeira da minha entidade coração", "Você é o CSS que faltava no meu HTML", "Me dá um Ctrl Alt Delete…acho que travei quando te vi", "Deixa eu ser a instância da sua classe love no seu objeto heart?", "Você é uma constante nesse mar de variáveis", "Não importa em qual plataforma você foi feito, eu me adequo ao seu sistema", "BLABLABLA - 7"];
	var numerocantada = Math.floor(Math.random() * cantadas.length);
	res.render("index.ejs", {
		cantadas: cantadas,
		numero: numerocantada,
	});
});

app.listen(8181,()=>{console.log("App rodando!");});