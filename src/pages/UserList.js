/* 정혜연 사용자 리스트 구현 */
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import UserRegistForm from '../components/form/UserRegistForm';
import UserListStyle from './UserList.module.css';
import { callGetUserListAPI } from '../apis/UserAPICall';
import UserPopup from '../components/lists/UserPopup';


function UserList() {

    const result = useSelector(state => state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userList = result.userlist;

    useEffect(
        () => {
            /*userList 호출 API */
            dispatch(callGetUserListAPI());
        },
        []
    );

    return(
        userList &&(
        <>
        <div id={`${UserListStyle.List}`}>
                <div className={ UserListStyle.btnStyle }>
                <button className={ UserListStyle.userUpdateButton } onClick={ () => navigate(`/userregist`) }>사용자 추가</button>
        &nbsp;
             </div>
                 <div className={ UserListStyle.userList }>
                    { userList.map(user => <UserPopup key={ user.id } user={ user }/>) }
               </div>
               
        </div>
        </>
        )
    );
}

export default UserList;