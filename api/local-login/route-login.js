const express = require('express');
const axios = require('axios');
const router = express.Router();
const crypto = require('crypto');

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

router.use(express.json());
router.use(cookieParser());

const SECRET_KEY = crypto.randomBytes(32).toString('hex');

// Middleware để kiểm tra xác thực
const isAuthen = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: 'Chưa xác thực' });
    }

    try {
        // Xác thực token
        const decoded = jwt.verify(token, SECRET_KEY);
        // Gán thông tin người dùng cho request
        req.userinfo = decoded.userinfo;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token không hợp lệ' });
    }
};


// Route để xử lý yêu cầu đăng nhập
router.post('/api/login', async function(req, res) {
    

    // Gửi yêu cầu để xử lý đăng nhập

    try{
        const { username, password } = req.body;
        const dataToSend = {
            username: username,
            password: password,
        };

        console.log([{'username': username},{'password': password}])
        const serverResponse = await axios.post('http://localhost:3001/api/database/req', dataToSend);

        if(serverResponse.status === 200){
            console.log({ message: "Req flask success" })

            // Tạo token
            const userinfo = { username }; // Thông tin của người dùng, bạn có thể thay đổi
            const token = jwt.sign({ userinfo }, SECRET_KEY);
            // Đặt token vào cookie
            res.cookie('token', token, { httpOnly: true });
            res.cookie('username', username, { httpOnly: true });
            res.status(200).json({ message: 'Đăng nhập thành công' });

            console.log({ message: 'Đăng nhập thành công' });

        }else{
            res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ' });
            console.log({ message: 'Thông tin đăng nhập không hợp lệ' });
        }
    }catch(error){
        console.error(error.message)
    }

});

// Route bảo vệ yêu cầu bằng xác thực và trả về thông tin người dùng
router.get('/isAuthen', isAuthen, (req, res) => {
    res.json({
        isAuthen: true,
        userinfo: req.userinfo
    });
});

// Route đăng xuất để xóa cookie chứa token
router.get('/api/logout', (req, res) => {
    // Xóa cookie bằng cách ghi đè giá trị với giá trị rỗng và hết hạn ngay lập tức
    res.cookie('token', '', { expires: new Date(0) });
    res.cookie('username', '', { expires: new Date(0) });
    // res.json({ message: 'Đã đăng xuất thành công' });
    res.redirect('/');

});


module.exports = router;
