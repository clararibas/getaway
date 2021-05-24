import React from 'react';
import './nav.css';

function NavP () {

    return(
        <div className="nav">
            <a href="/">Home</a>
            <a class="active" href="/projetos">Projetos</a>
        </div>
    );

}

export default NavP;