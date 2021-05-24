import React from 'react';
import './bannerapp.css';
import img2 from '../img/app.png';
import img3 from '../img/appstore.png';
import img4 from '../img/googleplay.png';

function BannerApp() {
    return(

        <div className="container">
        <div className="cardBanner">

        <div className="banner">

            <div className="esuqerda">
                <img src={img2} className="img_app" alt="appgetaway" id="img_app"/>
            </div>

            <div className="direita">
            <h2>Obtenha o app</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi placerat, orci quis vestibulum rutrum, tortor urna ultrices ligula, 
            mattis blandit neque massa nec ante. Duis tempor pulvinar porttitor. 
            Aenean eget felis vel lectus volutpat tempor. Nam vel viverra libero. 
            Nulla dignissim mauris sit amet ligula tempus, ut ultrices est malesuada.</p>
            <div className="baixar">
                <a href="https://www.apple.com/br/app-store/">
                <img src={img3} className="appstore" alt="appstore" id="appstore"/> 
                </a>
                <a href="https://play.google.com/store?hl=pt_BR&gl=US">
                <img src={img4} className="googleplay" alt="googleplay" id="googleplay"/>
                </a>
            </div>
            </div>
        
        </div>

        </div>
        </div>

    );
}

export default BannerApp;