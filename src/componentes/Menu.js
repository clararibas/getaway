import React from 'react';
import './menu.css';
import image from "../img/icon.png";
import {useAuth} from '../hooks/Auth';


function Menu() {

    const { signOut } = useAuth();

    return (
        <div className="header">
            <img src={image} className="img_logo" alt="getaway" id="img_logo"/>
            <a href="/" class="logo">getaway</a>
                <div className="header-right">
                    <a className="editarperfil" href="/editarperfil">Editar Perfil</a>
                    <button className="sair" type="submit" onClick={ ()=>{signOut()} } href="/">Sair</button>
                </div>
        </div>
        
    );
}

export default Menu;