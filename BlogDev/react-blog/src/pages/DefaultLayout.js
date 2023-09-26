import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SocialBar from '../components/SocialBar/SocialBar';

function DefaultLayout() {
    return (
        <div>
            <Header />
            <SocialBar></SocialBar>
            <Outlet />
            <Footer />
        </div>
    );
}

export default DefaultLayout;
