import 'dotenv/config.js';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3001;

// Make a DB client from the connection string in the .env file
const client = new MongoClient(process.env.MONGO_URI);

// Home Route
app.get('/', async (req, res) => {
    try {
        // Connect to the database
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        res.json({ message: "Successfully connected to the database" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to connect to the database." });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
