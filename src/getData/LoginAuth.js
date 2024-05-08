import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LoginAuth(LoggedIn,LoggedOut) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAuthen, setIsAuthen] = useState(LoggedIn)
  
    useEffect(() => {
      // Gửi yêu cầu để kiểm tra trạng thái đăng nhập khi component được render
      axios.get('isAuthen')
        .then(response => {
          setIsLoggedIn(response.data.isAuthen);
        })
        .catch(error => {
          console.error('Lỗi khi kiểm tra trạng thái đăng nhập:', error);
        });
    }, []); // Gọi useEffect một lần khi component được render
  
    return (
      <div>
        {isLoggedIn ? (
          isAuthen
        ) : (
          setIsAuthen(LoggedOut)
        )}
      </div>
    );
}

export default LoginAuth ;