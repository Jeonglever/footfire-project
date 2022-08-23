import ItemList from "../components/lists/ItemList";
import { useParams } from "react-router-dom";

function OtherItems() {

    const { userId } = useParams();
    

    return(
        <div>
            <h1>위시리스트 목록 </h1>
            <ItemList userId={userId}/>
        </div>
    );
}

export default OtherItems;