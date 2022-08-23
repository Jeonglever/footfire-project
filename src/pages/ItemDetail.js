import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ItemDetailForm from "./ItemDetailForm";

function ItemDetail( ) {

    const { id } = useParams();


    return (
        <div>
            <ItemDetailForm id={ id }/>
        </div>
    );




}

export default ItemDetail;