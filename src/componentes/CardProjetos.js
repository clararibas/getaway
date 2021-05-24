import React, { useEffect, useState } from 'react';
import './projetos.css';
import './modal.css';
import Map from './Mapa';
import api from '../services/api';
import userEvent from '@testing-library/user-event';

function CardProjetos() {

    const [projetos, setProjetos] = useState([]); 
    const [nomeProjeto, setNomeProjeto] = useState('');    
    const [descProjeto, setDescProjeto] = useState(''); 

    localStorage.setItem('projetos',JSON.stringify(projetos))

    //RECEBER PROJETOS
    useEffect( () => {

        const token = localStorage.getItem('token');        
        //console.log(token);
        //console.log(localStorage.getItem('token'))

        async function loadProjetos() {
            const response = await api.get('/allProjects', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            setProjetos(response.data);
        }
        loadProjetos();
    }, []);

    //EDITAR NOME PROJETO
    async function mudaNomeProjeto(id) {

        const token = localStorage.getItem('token');        
        console.log(token);
        console.log("entrou muda nome")
        console.log(id)
        const response = await api.put('/projectName', 
                {
                    projectID: id,
                    name: nomeProjeto,
                }, 
                { headers: {
                    authorization: `Bearer ${token}`
                } }
        ) 
            console.log(response);
            console.log("muda nome")
    } 

    //EDITAR DESCRIÇÃO PROJETO
    async function mudaDescProjeto(id) {

        const token = localStorage.getItem('token');        
        console.log(token);
        console.log("entrou muda descrição")
        console.log(id)

        const response = await api.put('/projectDescription', 
                {
                    projectID: id,
                    description: String(descProjeto),
                }, 
                { headers: {
                    authorization: `Bearer ${token}`
                } }
        ) 
            console.log(response);
            console.log("muda descrição")
    } 

    //DELETAR PROJETO
    async function deletaProjeto(id) {
        const token = localStorage.getItem('token');  
        const uid = localStorage.getItem('uid');      
        console.log(token);
        console.log("entrou deleta")

        try {
        const response = await api.delete('/project', {
            headers: {
                authorization: `Bearer ${token}`
            }, 
            data: {
                projectID: id,
                firebaseUID: uid,
            }
        }) 
            console.log(response);
            console.log("deleta")
    }catch(error){
        console.log(error);
    }
    }



    return (
        <>
        { projetos.map ( projeto => (

            <li key={projeto._id}>
                
            <div className="container">
            <div className="cardprojetos">
            
            <h1>{projeto.name}</h1>

            <div>
                <Map/>
            </div>

            <p>{projeto.description}</p>
            
            <div className="caminhamentos">
                <a href="/caminhamentos">{projeto.paths}</a>
            </div>

            <div className="opcoes">

            <a href="#abrirModal">Excluir</a>

            <div id="abrirModal" className="modal">
                <h2>Quer excluir esse projeto?</h2>
                <button className="excluir" onClick={ ()=>deletaProjeto(projeto._id) }>Excluir</button>
                <a href="#fechar" title="Fechar" class="fechar">Cancelar</a>
            </div>

            <a href="#editarprojeto">Editar</a>

            <div id="editarprojeto" className="modal">

                <form id="FormProjeto">
                <h2>Editar Projeto</h2>
                <label htmlFor="nomeprojeto"></label>

                <div className="input-block">
                <input name="nomeprojeto" 
                type="text" 
                placeholder={projeto.name}
                id="nomeprojeto"
                value={nomeProjeto}
                onChange={ e => setNomeProjeto(e.target.value) }
                />
                </div>

                <div className="input-block">
                <button className="salvar" onClick={ ()=>mudaNomeProjeto(projeto._id) }>Salvar</button>
                </div>

                <div className="input-block">
                <input name="descprojeto"
                placeholder={projeto.description}
                id="descprojeto"
                value={descProjeto} 
                onChange={ e => setDescProjeto(e.target.value) }
                />
                </div>

                <div className="input-block">
                <button className="salvar" onClick={ ()=>mudaDescProjeto(projeto._id) }>Salvar</button>
                <a href="#fechar" title="Fechar" class="fechar">Cancelar</a>
                </div>

                </form>

            </div>

            </div>

        </div>
        </div>
        
        </li>

        ))}
        </>
    
    );
}

export default CardProjetos;