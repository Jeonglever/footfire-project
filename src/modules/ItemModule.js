import { createActions, handleActions } from "redux-actions";

const initialState = {};

const GET_ITEMLIST = 'item/GET_ITEMLIST';
const DELETE_ITEM = 'item/DELETE_ITEM';
const UPDATE_ITEM = 'item/UPDATE_ITEM';
const SELECT_ITEM = 'item/SELECT_ITEM';

export const { item : { getItemlist, deleteItem, updateItem, selectItem }} = createActions({
    [GET_ITEMLIST]: (res) => ({ itemlist : res }),
    [DELETE_ITEM]: (res) => ({ delete : res}),
    [UPDATE_ITEM]: (res) => ({ regist : res}),
    [SELECT_ITEM]: (res) => ({ item : res})
});

const itemReducer = handleActions(
    {   
        [GET_ITEMLIST]: (state, { payload }) => {   return payload;},
        [DELETE_ITEM]: (state, { payload }) => {   return { delete : true};},
        [UPDATE_ITEM]: (state, { payload }) => {   return payload; },
        [SELECT_ITEM]: (satate, { payload }) => {    return payload; }
    },
    initialState
);

export default itemReducer;