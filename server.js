const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const mysql = require('mysql2');

// Tạo kết nối với cơ sở dữ liệu MySQL
const connection = mysql.createConnection({
    host: 'localhost', // Địa chỉ máy chủ MySQL
    user: 'root',      // Tên người dùng MySQL
    password: '',  // Mật khẩu của người dùng MySQL
    database: 'user' // Tên cơ sở dữ liệu MySQL bạn muốn kết nối
});

// Kết nối với cơ sở dữ liệu
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Sau khi kết nối, bạn có thể thực hiện các truy vấn MySQL thông qua connection
// Ví dụ:
connection.query('SELECT * FROM my_table', (error, results, fields) => {
    if (error) {
        console.error('Error executing query: ' + error.stack);
        return;
    }
    console.log('Query results: ', results);
});

// Đóng kết nối sau khi hoàn thành
connection.end();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8081, () => {
  console.log(`Server is running on port ${PORT}`);
});