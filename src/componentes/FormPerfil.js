import React, { useState } from 'react';
import './perfil.css';
import './modal.css';
import {useAuth} from '../hooks/Auth';

function FormPerfil() {

    const { mudaSenha } = useAuth();
    const { mudaEmail} = useAuth();
    const { excluiUser } = useAuth();

    const [novoEmail, setNovoEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');

    async function mudarSenha(e) {    
        //e.preventDefault();
        try{
            mudaSenha({
                newPassword: novaSenha,
            });
            console.log("mudou senha");
            console.log(novaSenha);
        }catch(error){
            console.log(error);
        };
    }

    async function mudarEmail(e) {    
        //e.preventDefault();
        try{
            mudaEmail({
                newEmail: novoEmail,
            });
            console.log("mudou e-mail");
            console.log(novoEmail);
        }catch(error){
            console.log(error);
        };
    }


    return (

        <div className="container">
        <div className="card">

            <div className="editarPerfil">

            <h1>Editar Informações</h1>
        
            <div className="input-block">
                <label htmlFor="novoEmail"></label>
                <input name="novoEmail" 
                type="text" 
                placeholder="Mudar E-mail"
                id="novoEmail"
                value={novoEmail}
                onChange={ e => setNovoEmail(e.target.value) } 
                />
            </div>

            <div className="input-block">
                <button className="salvar" onClick={  ()=>mudarEmail() }>
                    Salvar E-mail
                </button>
            </div>

            <div className="input-block">
                <label htmlFor="novaSenha"></label>
                <input name="novaSenha" 
                type="password" 
                placeholder="Mudar Senha"
                id="novaSenha"
                value={novaSenha}
                onChange={ e => setNovaSenha(e.target.value) }
                />
            </div>
            
            <div className="input-block">
                <button className="salvar" onClick={ ()=>mudarSenha() }>
                    Salvar Senha
                </button>

                <span><a href="#abrirModal" className="excluir">
                Excluir Conta
                </a></span>

                <div id="abrirModal" className="modal">
                <h2>Quer excluir sua conta?</h2>
                <button className="excluir" onClick={ ()=>excluiUser() }>Excluir</button>
                <a href="#fechar" title="Fechar" class="fechar">Cancelar</a>
                </div>

            </div>

            </div>
        </div>
        </div>
    );
}

export default FormPerfil;