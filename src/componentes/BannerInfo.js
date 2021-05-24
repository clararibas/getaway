import React from 'react';
import './bannerinfo.css';
import img1 from '../img/celular.png';

function BannerInfo () {
    return (
        <div className="container">

        <div className="bannerinfo">

            <div className="esquerda">
            <h2>Sobre o app</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi placerat, orci quis vestibulum rutrum, tortor urna ultrices ligula, 
            mattis blandit neque massa nec ante. Duis tempor pulvinar porttitor. 
            Aenean eget felis vel lectus volutpat tempor. Nam vel viverra libero. 
            Nulla dignissim mauris sit amet ligula tempus, ut ultrices est malesuada.</p>
            </div>

            <div className="direita">
                <img src={img1} className="img_cel" alt="celgetaway" id="img_cel"/>
            </div>
        
        </div>

       
        </div>
    );
}

export default BannerInfo;