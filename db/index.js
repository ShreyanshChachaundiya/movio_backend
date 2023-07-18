const mongoose = require('mongoose');
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASS;

mongoose
    .connect(`mongodb+srv://${username}:${password}@cluster0.o3vsgrd.mongodb.net/project2`)
    .then(() => {
        console.log('db is connected!')
    })
    .catch((ex) => {
        console.log('db connection failed: ', ex)
    })