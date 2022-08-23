import { Link } from  'react-router-dom';
import PopupStyle from './PopupStyle.module.css';

/* UserList 페이지에 출력할 유저 정보를 담은 함수 */
function UserPopup ( { user }) {

    return (
        <Link to={ `/itemlist/${ user.id }`}>
            <p id={ PopupStyle.userpopup }>{ user.nickname }님의 위시리스트</p> <hr/>
        </Link>
        );

}

export default UserPopup;