import React, { useState } from 'react';
import './cadastro.css';
import {useAuth} from '../hooks/Auth';
import { useHistory } from "react-router-dom";

function Login() {

    const { signIn } = useAuth();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleLogin(e) {    
        e.preventDefault();
        try{
            signIn({
                email: email, 
                password: senha,
            });
            console.log("ENTROU! REDIRECIONANDO PARA PROJETOS");
            console.log(senha);
            history.push('/projetos');
        }catch(error){
            console.log(error);
        };
    }

    return (

        <div className="container">
        <div className="card">

            <form onSubmit= {handleLogin}>

            <h1>Entrar no GetaWay</h1>
        
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

            <p>
                Ainda não é cadastrado? <a href="/cadastrar">Cadastre-se</a>
            </p>

            <button type="submit">Entrar</button>

            </form>
        </div>
        </div>
    );
}

export default Login;