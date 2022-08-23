import { NavLink, useNavigate } from 'react-router-dom';
import Style from './Style.module.css';
import Homebutton from './Homebutton.png';
import { useDispatch } from "react-redux";
import { resetLoginUser } from "../../modules/UserModule";

/* MyList, Main, Login(Logout) Navbar 구현 */
function Navbar () {
     //true면 로그인된거 false면 로그인안된거
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    /* 로그아웃 호출 시 localStorage 저장 값 삭제, userReducer 값 리셋, 루트로 이동  */
    const logoutHandler = () => {
        localStorage.removeItem('isLogin');
        localStorage.removeItem('userId')
        dispatch(resetLoginUser());
        navigate('/');
    }

    const activeStyle = {

    
    
    }

    return(
        <>
        <div id={`${Style.nav}`}>
                <h2><NavLink to="/itemlist/mylist" style={ ({isActive}) => isActive? activeStyle : undefined }>MyList</NavLink></h2>
                <NavLink to="/" style={ ({isActive}) => isActive? activeStyle : undefined }><img src={ Homebutton } id={ Style.homebtn }/></NavLink>
                { !loginStatus ? (
                        <h2><NavLink to="/login" style={ ({isActive}) => isActive? activeStyle : undefined }>Login</NavLink></h2>
                    ) : (
                        <h2 onClick={ logoutHandler }><a href="">Logout</a></h2>
                    )                   //-> setitem, getitem, removeitem
                }
        </div>
        <hr/>
        </>
    );

    
}

export default Navbar;