import GoogleLogin from '../components/GoogleLogin'
import AppleLogin from '../components/AppleLogin'
import FormComponent from '../components/FormComponent'


function LoginPage(){
    

    const handleLoginClick = () => {
      // Chuyển hướng người dùng đến trang đăng nhập của Google
      window.location.href = '/auth/google';
    }

    return(
        <div className='content-box'>

            <div className='login-content'>
                    <h1 className='bot-margin'>Sign in</h1>
                    <FormComponent></FormComponent>
            </div>
        </div>
    )
}

export default LoginPage;