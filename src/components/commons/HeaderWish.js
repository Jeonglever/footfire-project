import Style from './Style.module.css';

/* 종연님 상세페이지 & 승환님 마이리스트 헤더 */
function HeaderWish () {

    return (
        <>
        <div id={`${Style.header}`}>
            <h1>Wish List</h1>
        </div>
        </>
    );
}

export default HeaderWish;