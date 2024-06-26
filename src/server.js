const getAllClients = require('./mocks/request');
const { createClient } = require('redis');

const client = createClient();

const express = require('express');
const app = express();

app.get('/', async (req, res) => {
    const clientsFromCash = await client.get('getAllClients');
    if(clientsFromCash) {
        return res.send(JSON.parse(clientsFromCash))
    }

    const clientDB = await getAllClients();
    await client.set('getAllClients', JSON.stringify(clientDB), {EX : 10});
     res.send(clientDB);
})
async function startUp() {
    await client.connect().catch( console.error );
    app.listen(3000, () => {
        console.log("OK");
    })
}
startUp();
