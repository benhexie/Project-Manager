const express = require("express");
const multer = require("multer");
const app = express();
const upload = multer();

app.use(express.static(`${__dirname}/webpages`));

app.get("/", (req, res) => {
    try{
        res.sendFile(`${__dirname}/webpages/index.html`);
    } catch(error){
        console.log(error.message);
        res.send("An error occured!");
    }
});

app.post("/", upload.array(), (req, res) => {
    res.json([
        {name: "Ben"},
        {name: "Ski"},
        {name: "Mike"}
    ]);
});

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`Project manager is listening on port ${listener.address().port}`);
});




































// const mongoose = require('mongoose')
// var MongoClient = require('mongodb').MongoClient;

// const url = `mongodb+srv://admin:admin@cluster0.zk3z7ff.mongodb.net/?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useUnifiedTopology: true 
// }
// // mongoose.connect(url,connectionParams)
// // .then(e => {
// //     console.log('Connected to the database');
// //     console.log(e.connections[0].db.namespace);
// // })
// // .catch(err => {
// //     console.error(`Error connecting to the database. n${err}`);
// // });
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     console.log("Connected to the database!");
//     console.log(db);
//     db.close();
// });