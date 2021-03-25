import React, { useState } from 'react';
import './cadastro.css';
import api from '../services/api';

function Cadastro() {

    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');
    const [csenha, setCsenha] = useState ('');

    async function handleCadastro (e) {
        e.preventDefault();
        const response = await api.post( 
            //'url do local host',
            {
                email,
                senha,
                csenha
            })
        setEmail('');
        setSenha('');
        setCsenha('');
    }

    return (

        <div className="container">
        <div className="card">

            <form onSubmit={handleCadastro}>

            <h1>Cadastre-se no GetaWay</h1>
        
            <div className="input-block">
                <label htmlFor="email"></label>
                <input name="email" 
                type="text" 
                placeholder="E-mail"
                id="email"
                value={email}
                onChange={ e => setEmail(e.target.value) } 
                required
                />
            </div>

            <div className="input-block">
                <label htmlFor="senha"></label>
                <input name="senha" 
                type="password" 
                placeholder="Senha"
                id="senha"
                value={senha}
                onChange={ e => setSenha(e.target.value) } 
                required
                />
            </div>

            <div className="input-block">
                <label htmlFor="c-senha"></label>
                <input name="c-senha" 
                type="password" 
                placeholder="Confirmar Senha"
                id="c-senha"
                value={csenha}
                onChange={ e => setCsenha(e.target.value) }  
                required
                />
            </div>

            <p>
                Já é cadastrado? <a href="#entrar">Iniciar sessão</a>
            </p>

            <button type="submit">Cadastrar</button>

            </form>
        </div>
        </div>
    );
}

export default Cadastro;