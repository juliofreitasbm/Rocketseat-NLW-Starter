const express = require("express");
const server = express();

// configurar pasta publica
/*
	Fazer o servidor entender que pode acessar as pastas que estão dentro da public sem precisar colocar /public antes
*/
server.use(express.static("public"));

// utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
	express: server,
	noCache: true
});

// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
	return res.render("index.html");
});

// lembre-se que a rota é localhost:3000/create-point
// A rota não é localhost:3000/create-point.html
server.get("/create-point", (req, res) => {
	return res.render("create-point.html");
});

server.get("/search", (req, res) => {
	return res.render("search-results.html");
});

// ligar o servidor
server.listen(3000);