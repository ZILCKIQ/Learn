const MongoClient = require('mongodb').MongoClient;

const DB_URL = "mongodb://localhost:27017";
const DB_NAME = "test";
const COLLECTION = "document";

//增
async function insertOne(doc, option = {}) {
    try {
        const Client = await MongoClient.connect(DB_URL, { useNewUrlParser: true });
        const DOC = Client.db(DB_NAME).collection(COLLECTION);
        try {
            const result = await DOC.insertOne(doc, option);
            console.log("写入数据库成功!");

            Client.close();
        } catch (error) {
            console.log("error");
            Client.close();
        };
    } catch (error) {
        console.log("连接数据库失败!");
    };
};

// insertOne();

//删
async function deleteOne(filter, option = {}) {
    try {
        const Client = await MongoClient.connect(DB_URL, { useNewUrlParser: true });
        const DOC = Client.db(DB_NAME).collection(COLLECTION);
        try {
            const result = await DOC.deleteOne(filter, option);
            console.log("删除数据库成功!");

            Client.close();
        } catch (error) {
            console.log("error");
            Client.close();
        };
    } catch (error) {
        console.log("连接数据库失败!");
    };
};

// deleteOne({});

//查
async function findOne(query, option = {}) {
    try {
        const Client = await MongoClient.connect(DB_URL, { useNewUrlParser: true });
        const DOC = Client.db(DB_NAME).collection(COLLECTION);
        try {
            const result = await DOC.findOne(query, option);
            console.log(result);

            Client.close();
        } catch (error) {
            console.log("error");
            Client.close();
        };
    } catch (error) {
        console.log("连接数据库失败!");
    };
};

// findOne({ b: 2 });

//改
async function updateOne(filter, update, option = {}) {
    try {
        const Client = await MongoClient.connect(DB_URL, { useNewUrlParser: true });
        const DOC = Client.db(DB_NAME).collection(COLLECTION);
        try {
            const result = await DOC.updateOne(filter, update, option);
            console.log("更新成功!");

            Client.close();
        } catch (error) {
            console.log("error");
            Client.close();
        };
    } catch (error) {
        console.log("连接数据库失败!");
    };
};

// updateOne({ b: 2.1 }, { $set: { b: 2 } });
