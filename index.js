const express = require('express'); // NÃO PRECISA DE TYPE MODULE NO PACKGE!!!!!!! e module. const para não alterar, recebe o framework
const app = express(); // recebdo o express, o aparenteses significa q ele recebe uma instancia do express

app.get('/', (req, res) => { // req = requisição e re = reposta
    res.send('Hello Word!'); // send pode ser entendida como um tipo de texto 
}); // nosso endponit (ou rota). Recebe a requisição get. '/' é a rota padrão 

app.listen(8080, () => { // Listem = ouvir. então app está ouvindo a porta 8080 monitora atravez  por uma porta HHHTP. '() =>' fica monitorando a requisição 
    let data = new Date();
    console.log("Seervidor node iniciado em : " + data);
}) // 

//comando para executar = "node index.js"