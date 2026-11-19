import 'dotenv/config.js';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.json({ message: "Server is running!"});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
