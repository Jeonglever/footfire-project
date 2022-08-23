import { request } from './Api'; 
import { login, registUser, getUserlist } from '../modules/UserModule';


export function callGetUserListAPI() {
    
    console.log('getUserList api calls...');
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/user');
        console.log('getUserList result : ', result);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getUserlist(result));
    }

}



export function callLoginAPI(loginInfo) {
    
    /* redux-thunk */
    return async (dispatch, getState) => {

        /* Api의 axios 처리 참조  */
        const userList = await request('GET', '/user'); //리퀘스트 함수 호출

        /* name과 password 일치 여부 확인 - 서버에서 이루어져야 하는 로직 */
        const result = await userList.find(user => user.nickname === loginInfo.nickname && user.password === loginInfo.password);

        console.log('login result : ', result);

        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(login(result));

    }
}


/* user 등록 함수 */
export function callRegistUserAPI(user) {
    
    console.log('registUser api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('POST', '/user/', user);
        console.log('registUser result : ', result);
    
        dispatch(registUser(result));
    }
}

