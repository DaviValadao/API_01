const express = require('express'); // NÃO PRECISA DE TYPE MODULE NO PACKGE! e module. const para não alterar, recebe o framework
const app = express(); 
const calculadoraIMC = require('./servico/calculadoraIMC');

app.get('/', (req, res) => { // req = requisição e re = reposta
    let peso = req.query.peso;
    let altura = req.query.altura;

    if(calculadoraIMC.validaParamentro(req.query.peso) && calculadoraIMC.validaParamentro(req.query.altura))
    {
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura); 
        let status = calculadoraIMC.retornarStatusIMC(imc);

        let json = {imc: imc, status: status};

        res.json({json});
    }
    else
    {
        res.status(400).json({'Erro':'Peso ou altura inválidos.'});
    }
    }); 

app.listen(8080, () => { 
    let data = new Date();
    console.log("Servidor node iniciado em : " + data); 
})

//comando para executar = "node index.js"

