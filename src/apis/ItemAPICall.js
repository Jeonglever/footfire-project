import { getItemlist, deleteItem, updateItem, selectItem } from '../modules/ItemModule';
import { request } from './Api'; 

/* 조회하기 API */
export function callGetItemListAPI(userId) {

    console.log('getItemList api calls...');

    return async (dispatch, getState) => {

        const result = await request('GET', '/Item').then(res => res.filter(item => item.userid == userId));
        console.log('getItemList result : ', result);

        dispatch(getItemlist(result));

    }
}


export function callSelectItemAPI(id) {

    console.log('getItemList api calls...');

    return async (dispatch, getState) => {

        const result = await request('GET', `/Item/${id}`);
        console.log('getItemList result : ', result);

        dispatch(selectItem(result));

    }
}


/* 아이템 등록 API */
export function callUpdateItemAPI(item) { 
    
    console.log('updateItem api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('POST', '/item/', item);
        console.log('updateItem result : ', result);
    
        dispatch(updateItem(result));
    }
}

/* 버튼 지우기 API  */
export function callDeleteItemAPI(itemId) {

    return async (dispatch, getState) => {
    
        const result = await request('DELETE', `/Item/${itemId}`);
        console.log('deleteItem result : ', result);
    
        dispatch(deleteItem(result));
    }
}

