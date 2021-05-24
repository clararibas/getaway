import React, { useState } from 'react';
import './cadastro.css';
//import api from '../services/api';
import {useAuth} from '../hooks/Auth';
import { useHistory } from "react-router-dom";


function Cadastro() {
    
    const { signUp } = useAuth();
    const history = useHistory();

    // Função de mudar página  
    const routeChange = () =>{  
        let path = '/projetos'; 
        history.push(path);
    }

    const [email, setEmail] = useState ('');
    const [senha, setSenha] = useState ('');
    const [csenha, setCsenha] = useState ('');

     // Função de enviar os dados  
     async function handleCadastro (e)  {
        e.preventDefault();
        if( senha  ===  csenha ){
        
                try{
                    signUp({
                        email: email, 
                        password: senha,
                    });
                    console.log("CADASTROU! REDIRECIONANDO PARA LOGIN");
                    history.push('/entrar');
                }catch(error){
                    console.log(error);
                };

                setEmail('');
                setSenha('');
                setCsenha('');
        }
        else {
            window.alert("As senhas são diferentes")
        }
}
    return (

        <div className="container">
        <div className="card">

            <form onSubmit= {handleCadastro}>

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
                Já é cadastrado? <a href="/entrar">Iniciar sessão</a>
            </p>

            <button type="submit" onSubmit={routeChange} >Cadastrar</button>

            </form>
        </div>
        </div>
    );
}

export default Cadastro;