import { Outlet } from 'react-router-dom';
import HeaderWish from '../components/commons/HeaderWish';
import Navbar from '../components/commons/Navbar';
import Footer from '../components/commons/Footer';

function Layout() {
    
    return(
        <div>
            <HeaderWish/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );



}

export default Layout;