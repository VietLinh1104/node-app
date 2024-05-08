
import React, { useState } from 'react';
import axios from 'axios';

function FormComponent() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');
  const [success , setSuccess] = useState('');


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    if (warning || error) {
      setWarning('');
      setError('');
    }else{
      setSuccess('')
    }

    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Reset all state messages
    setError('');
    setWarning('');
    setSuccess('');
    
  
    // Check if username or password fields are empty
    if (!formData.username || !formData.password) {
      setWarning('Vui lòng điền tên người dùng và mật khẩu.');
      return; // Stop the function if fields are empty
    }
  
    try {
      const dataToSend = {
        username: formData.username,
        password: formData.password,
      };

      // First request
      // const serverResponse = await axios.post('/api/database/req', dataToSend);
      const passportResponse = await axios.post('/api/login', dataToSend);

      //Authen Passport
      if (passportResponse.status === 200) {
        console.log('User auth successfully!');
        setSuccess('User auth, submitted successfully!');
  
        // Clear form fields on successful submission
        setFormData({
          username: '',
          password: '',
          rememberMe: false
        });
  
      } else {
        console.log('Failed to auth user.');
        setError('Failed to auth user.');
        return; // Exit if the first request fails
      }

      // Proceed with second request if the first one succeeded...
    } catch (error) {
      if (error.response) {
        // Server trả lời với trạng thái ngoài phạm vi 2xx
        console.error('Error:', error.response.data.message);
        setError(error.response.data.message); // Set lỗi từ message của server
      } else {
        // Các lỗi khác khi request bị từ chối
        console.error('Error:', error.message);
        setError('An error occurred. Please try again later.');
      }
    }
    
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {success && 
            <div className=" error-message p-2 mb-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3
            ">
              {success}
            </div>
          }

          <label htmlFor="username" className="margin-bot-5">Username:</label>
          <input
            type="text"
            className="form-control margin-bot-10"
            id="username"
            placeholder="Enter your username..."
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="margin-bot-5">Password:</label>
          <input
            type="password"
            className="form-control margin-bot-5"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-check margin-bot-20">
          <input
            className="form-check-input"
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="rememberMe">
            Save for next login
          </label>
        </div>
        {/* lỗi ko submit */}
        {error && 
          <div className=" error-message p-2 mb-3 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-3
          ">
            {error}
          </div>
        }

        {/* cảnh báo empty */}
        {warning && 
        <div className=" error-message p-2 mb-3 text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3
        ">
          {warning}
        </div>
        }

        <button type="submit" className="widbut">Sign in</button>
      </form>
    </div>
  );
}

export default FormComponent;
