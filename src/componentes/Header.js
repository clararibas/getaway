import React from 'react';
import './header.css';
import image from "../img/icon.png";

function Header() {
    return (
        <div className="header">
            <img src={image} className="img_logo" alt="getaway" id="img_logo"/>
            <a href="#default" class="logo">getaway</a>
                <div className="header-right">
                    <a className="entrar" href="#entrar">Entrar</a>
                    <a className="cadastrar" href="#cadastrar">Cadastrar</a>
                </div>
        </div>
    );
}

export default Header;