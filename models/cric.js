let client = require('../dbConnection');

let collection = client.db().collection('cric');

function postcric(cric, callback) {
    collection.insertOne(cric,callback);
}

function getAllcric(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postcric,getAllcric}