import { Navigate } from 'react-router-dom';
import ItemUpdateForm from "../components/form/ItemUpdateForm";

function itemRegistPage () {

    /* 로그인 상태가 아닌데 호출할 경우 메인으로 */
    const loginStatus = !!localStorage.getItem('isLogin'); //처리하는건 똑같이 loginStatus로 하고 있지만

    if(!loginStatus) { //만약 로그인상태가 아닐경우
        return <Navigate to="/login" replace={ true }/> //상품 등록 페이지대신 로그인 페이지로 들어가게 된다
    }

    return (
        <>
        <h1>아이템 등록 페이지</h1>
        <ItemUpdateForm/>
        </>
    );
}

export default itemRegistPage;