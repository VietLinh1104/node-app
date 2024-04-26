const express = require('express');
const axios = require('axios');
const { MongoClient } = require('mongodb');
const cookieParser = require('cookie-parser'); // Import middleware cookie-parser

const router = express.Router();
const uri = 'mongodb://localhost:27017';
const dbName = 'data-user';
const collectionName = 'mark-table';
const client = new MongoClient(uri);

// Sử dụng middleware cookie-parser để phân tích cookie từ yêu cầu
router.use(cookieParser());

async function queryDataByField(fieldName, value) {
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const query = { [fieldName]: value };
        const result = await collection.find(query).toArray();
        return result;
    } catch (error) {
        throw new Error('Error querying data:', error);
    }
}

router.get('/api/database/pull', async (req, res) => {
    try {
        const fieldName = "Mã sinh viên";
        
        // Lấy giá trị của username từ cookie
        const username = req.cookies.username;

        if (!username) {
            return res.status(400).json({ error: 'Không thể lấy username' });
        }
        const result = await queryDataByField(fieldName, username);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
