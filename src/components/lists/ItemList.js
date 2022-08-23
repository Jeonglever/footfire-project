import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { callGetItemListAPI } from '../../apis/ItemAPICall';
import Item from '../component/Item';
import Style from './ListStyle.module.css';
/* 승환님 아이템 리스트 구현 */
function ItemList({ userId }) {
    const result = useSelector(state => state.itemReducer);
    const itemList = result.itemlist;
    const deleteState = result.delete;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //*--- 승환님 구현
    useEffect(
        () => {
            
            if (result.delete) {
                alert('아이템 삭제');
                navigate(`/itemlist/mylist`);
            }

            dispatch(callGetItemListAPI(userId));

        },
        [deleteState]
    );
    //*----

    return (
        itemList && (
        <div>
            <div id={Style.plusBtn}>
                <button id={Style.btn1} onClick={ () => navigate(`/item/modify`) } hidden={ (String(userId) == localStorage.getItem("userId")) ? null : "0" }>추가하기</button>
            </div>
            <div id={Style.list}>
                { itemList.map(item => <Item key={ item.id } item={ item }/> )}
            </div>
        </div>
        )
    );
}
export default ItemList;