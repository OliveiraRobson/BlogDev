import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function AppLayout({ children }) {
    return (
        <div>
            <Header />
            {/* <main>{children}</main> */}
            <Footer />
        </div>
    );
}

export default AppLayout;
