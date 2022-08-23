import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginFormStyle from './LoginForm.module.css';
import { callRegistUserAPI } from '../../apis/UserAPICall'
import userReducer from '../../modules/UserModule';

function UserRegistForm() {

    const result = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* 입력 값 state 저장 */

    const [registUser, setRegistUser] = useState(
        {
            nickname: '',
            password: '',
        }
    );

    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;
    
        setRegistUser(
            {
                ...registUser,
                [name] : value
            }
    );
        
    }

    useEffect(
        () => {
            if(result.registUser) { 
                alert('사용자 등록');
                navigate('/');
            }

            if(result.checkNickname) {
                dispatch(callRegistUserAPI(registUser));
            } else {
                alert('등록');
            }
        },
        [result]
    );

    // const nicknameInfo = {
    //     method: "POST",
    //     nkname : user.nickname
    // };

    const onClickHandler = () => {


        // dispatch 로 API 불러오기
        // 그것에 대한 결과처리를 중복이다/아니다로 스토어에 저장
        // 저장된 값을 통해 중복

        // if(result.checkNickname) {
        //     dispatch(callRegistUserAPI(registUser));
        // } else {
        //     alert('중복되는 닉네임입니다');
        // }

        dispatch(callRegistUserAPI(registUser));

       
        // fetch("http://localhost:4000/user/nickname", nicknameInfo)
        //     .then(res => res.json())
        //     .then(json => {
        //         if (json === false) {
        //             alert("이미 존재하는 닉네임입니다.");
        //         }
        //     })
    }

    return(
         <>
            <div className= { LoginFormStyle.loginForm }>
                <label>닉네임 : </label>
                <input type="text" name="nickname" value= { registUser.nickname } onChange={ onChangeHandler }/> &nbsp;&nbsp;&nbsp;
                <label>PASSWORD : </label>
                <input type="password" name="password" value= { registUser.password } onChange={ onChangeHandler }/> &nbsp;
                <button className={ LoginFormStyle.loginButton } onClick={ onClickHandler }>사용자 등록</button> 
            </div>
        </>
    );


}

export default UserRegistForm;