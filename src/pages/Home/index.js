import React from 'react';
import Header from '../../componentes/Header.js';
import BannerApp from '../../componentes/BannerApp.js';
import BannerInfo from '../../componentes/BannerInfo.js';

function Home () {
    return (
        <>
        <Header/>
        <BannerInfo/>
        <BannerApp/>
        </>
    );
}

export default Home;