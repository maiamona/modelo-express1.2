let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.send('Primeira rota com Express');
});

app.get('/rotas', function (req, res) {
    res.send('testando rotas');
});

app.listen(3000, function () {
    console.log("A aplicação esta funcionando na porta 3000");
})