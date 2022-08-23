import Style from './Style.module.css';

function Footer () {

    return (
        <>
        <div id={`${Style.footer}`} >
            <div id={`${Style.footerText}`}>
            <h5>상호 : FootFire     대표자 : 황정김</h5>
            <h5>개인정보보호책임자 : 김정황(realfootfire@gmail.com)</h5>
            <h5>전화 : 010-1234-5678    주소 : 서울특별시 종로구 인사동길 12 대일빌딩 7층, 15층</h5>
            <h5>Copyright © Anything You Want All rights reserved. Design by FootFire</h5>
            </div>
        </div>
        </>
    );
}

export default Footer;