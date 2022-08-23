import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
export const LOGIN = 'user/LOGIN';
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';
export const REGIST_USER = 'user/REGIST_USER';
export const GET_USERLIST = 'user/GET_USERLIST';

/* 유저 관련 액션 함수 */
export const { user : { login, resetLoginUser, registUser, getUserlist }} = createActions({
    [LOGIN]: (res) => ({ res }),
    [RESET_LOGIN_USER]: (res = initialState) => ({ res }),
    [REGIST_USER]: (res) => ({ regist : res }),
    [GET_USERLIST]: (res) => ({ userlist : res })
});

/* 리듀서 함수 */
const userReducer = handleActions(
    {   
        [LOGIN]: (state, { payload : {res} }) => {

            if(res) {
                /* localStorage에 로그인 상태 저장 */
                localStorage.setItem("isLogin", true); //다른 페이지에서도 같은 로그인 상태로 동작할수 있게 하는 장치
                localStorage.setItem("userId", res.id); 
            } else {
                res = { message : 'LOGIN_FAIL'};
            }

            return res;

        },
        [RESET_LOGIN_USER]: (state, { payload : { res } }) => {
            
            return res;

        },

        [REGIST_USER]: (state, { payload : { res } }) => {
            return res;
        },

        [GET_USERLIST]: (state, { payload  }) => {
            return payload;
        }

    },
    initialState
);

export default userReducer;

