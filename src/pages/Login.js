import LoginForm from '../components/form/LoginForm';
import LoginFormStyle from '../components/form/LoginForm.module.css';
import { Navigate } from 'react-router-dom';


/* 로그인 페이지 표시 */
/* 로그인 폼 호출 */
function Login() {

    const loginStatus = !!localStorage.getItem('isLogin');

    if(loginStatus) {
        return <Navigate to="/" replace={ true }/>
    }


    return (
        <>
            <h1 className= { LoginFormStyle.loginStyle }>로그인 페이지</h1>
            <br/>
            <LoginForm/>
        </>
    );
}

export default Login;