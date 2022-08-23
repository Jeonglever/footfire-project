import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { callSelectItemAPI } from '../apis/ItemAPICall';
import pageStyle from './pageStyle.module.css';

function ItemDetailForm () {

    const { id } = useParams();
    const result = useSelector(state => state.itemReducer);
    const item = result.item;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menu 호출 API */
            dispatch(callSelectItemAPI( id ));
        },
        []
    );

    return ( 
        item && (
        <>
        <div className={pageStyle.itemDetail} >
            <div className={pageStyle.itemImage}>
              <img alt={ item.itemName } src={ item.detail.image }/>
            </div>
            <div className={pageStyle.itemText}>
                <div id={pageStyle.itemTitle}>{ item.itemName }</div>
                <p> { item.itemPrice }원</p>
                <div id={pageStyle.itemInfo}> { item.detail.description}</div>
                <p> 주소 : { item.detail.link } </p>
            </div>
        </div>
        </>
        )
    );
}

export default ItemDetailForm;