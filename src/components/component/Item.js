import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { callDeleteItemAPI } from '../../apis/ItemAPICall';
import ItemStyle from "./ItemStyle.module.css";


function Item({ item }){

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const deleteHandler = () => dispatch(callDeleteItemAPI(item.id));

    return (
            <div className={ItemStyle.itemImage}>
                    <div>
                        <img src={item.detail.image} onClick={ () => navigate(`/item/${item.id}`) }/>
                    </div>
                    <div className={ItemStyle.itemDelBtn}>
                        <p>{ item.itemName }</p>
                        <button onClick={ deleteHandler } hidden={ (String(item.userid) == localStorage.getItem("userId")) ? null : "0" }>X</button>
                    </div>
            </div>
    );
}

export default Item;