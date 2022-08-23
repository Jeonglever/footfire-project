import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import LoginFormStyle from './LoginForm.module.css';
import { callLoginAPI } from '../../apis/UserAPICall';
import { resetLoginUser } from "../../modules/UserModule";

/* 로그인 폼 */
function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    /* input 태그 입력한 값 state 관리 */
    const [loginInfo, setLoginInfo] = useState(
        {
            id : '',
            nickname : '',
            password : ''
        }
    );
    
    /* 입력값 변경시 발동하는 이벤트 핸들러 */
    const onChangeHandler = (e) => {
        setLoginInfo(
            {
                ...loginInfo,
                [e.target.name] : e.target.value
            }
        );
    }

    /* 로그인 버튼 클릭시 동작하는 이벤트 핸들러 */
    const onClickHandler = () => {

        dispatch(callLoginAPI(loginInfo));
    }

    /* 로그인 성공하거나 실패했을 경우 */
    useEffect(
        () => {

            if(result?.message) { //로그인 실패시 동작
                alert('닉네임과 비밀번호를 확인해주세요');
                setLoginInfo(
                    {
                        nickname : '',
                        password : ''
                    }
                );
                dispatch(resetLoginUser());
            }else if(loginStatus){
                navigate('/');
            }
        },
        [result]
    );

    return (
        <>
            <div className= { LoginFormStyle.loginForm }>
                <label>닉네임 : </label>
                <input type="text" name="nickname" value={ loginInfo.nickname } onChange={ onChangeHandler }/> &nbsp;&nbsp;&nbsp;
                <label>PASSWORD : </label>
                <input type="password" name="password" value={ loginInfo.password } onChange={ onChangeHandler }/> &nbsp;
                <button className={ LoginFormStyle.loginButton } onClick={ onClickHandler }>로그인</button> 
            </div>
        </>
    );
}

export default LoginForm;