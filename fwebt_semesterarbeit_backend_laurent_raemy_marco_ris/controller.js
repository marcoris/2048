const http = require('http');
const host = 'localhost';
const port = 8000;
const fs = require('fs');
const jsonFilePath = 'highscores.json';
const qs = require('querystring');

const router = function (request, response) {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    }

    switch (request.url) {
        case '/highscores':
            getHighscoreList(request, response, headers);
            break
        default:
            getServerStatus(request, response, headers);
    }
}

const getServerStatus = function (request, response, headers) {
    response.writeHead(200, headers);
    response.end(`\nServer is Running...\n\n`);
}

const getHighscoreList = function (request, response, headers) {
    response.writeHead(200, headers)
    let rawData = fs.readFileSync(jsonFilePath, 'utf8');
    let highscoresList = JSON.parse(rawData);

    switch (request.method) {
        case 'POST':
            request.on('data', data => {
                highscoresList.push(JSON.parse(data));
                fs.writeFileSync(jsonFilePath, JSON.stringify(highscoresList), 'utf8');
            })
            break
        default:
            response.write(JSON.stringify(highscoresList));
    }
    response.end();
}

const server = http.createServer(router)
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
    console.log(`Call http://${host}:${port}/highscores to get a list of all the highscores`);
    console.log(`Call POST http://${host}:${port}/highscores to insert a new entry to the list of all the highscores`);
})