import express from "express";
import signUpUserTec from "./features/signup/signup.service.js";

const app = express();

const PORT = 8080; /* aconselhavel ou 8081*/

/* const server = http.createServer((req, res) => {
    res.writeHead(200, {                 Codigo de estatos é o numero sucesso 
        "Content-Type": "application/json"              informa para o navegador informa que o site é Json
    });

    res.end(JSON.stringify({                converte json para texto 
        mensagem: "Servidor Node.js Funcionando!!!"
    }));
}); */

app.use(express.json());

 /* o / é a raiz do site */
app.get("/", (req, res) => {
    res.json({
        "message": "raiz funcional"
    });
}); 

app.get("/user", (req, res) => {    /*  get para pegar uma coisa do servidor como pegar os dados do usuario ou Item */
    res.json({
        "message": "area do usuario"
    });
}); 

app.post("/signin", (req, res) => {         /* o post vai enviar o dado para o banco como fazendo login */
    const {name, password} = req.body;
    res.json({
        "message": "Area de cadastro de usuario",
        "resp": "usuario adicionado",
        /* ou "message": {
            "primeira": "Area de cadastro",
            "segunda": "usuario adicionado"
        }, */
        "name": name,
        "password": password
            })
})
/* server.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`)
}); */
app.post("/signup", async (req, res) => {
    try {
        const {usename, email,  password} = req.body;
        const user = singUpUser(usename, email, password);
        if(!!user){
            res.status(201).json(user);
        }
    }
    catch (error) {
        res.status(502).json({message: error.message});
        console.log(error.message);
    }
})
app.listen(PORT, () => {
        console.log(`servidor iniciado em http://localhost:${PORT}`);
});

