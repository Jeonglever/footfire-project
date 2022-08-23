import ItemList from "../components/lists/ItemList";
import itemReducer from "../modules/ItemModule";
import ItemStyle from "../components/lists/ListStyle.module.css";

function Items() {

    /* 로그인 된 유저의 아이디 값 */
    const userId = parseInt(localStorage.getItem('userId'));
    return(
        <div>
            <h1>목록</h1>
                <ItemList userId={userId}/>
        </div>
    );
}

export default Items;