import React from 'react';
import './nav.css';

function NavC () {

    return(
        <div className="nav">
            <a href="/">Home</a>
            <a href="/projetos">Projetos</a>
            <a class="active" href="/caminhamento">Caminhamento</a>
        </div>
    );

}

export default NavC;