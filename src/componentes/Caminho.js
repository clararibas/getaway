import React, { useEffect, useState } from 'react';
import './caminhamento.css';
import Map from './Mapa';
import api from '../services/api';

function Caminho () {

    const [paths, setPaths] = useState([]);
    //RECEBER PATHS
    useEffect( () => {

        const token = localStorage.getItem('token');        
        console.log(token);
        //console.log(localStorage.getItem('token'))

        async function loadPaths() {
            console.log("ta na função")
            await api.get('/allPaths', {
                 headers: {
                     authorization: `Bearer ${token}`
                 }, 
                 params: {
                     projectID: "6090732105b88d4de84a65fd"
                 }
             }).then((response) => {
                console.log("caiu aqui")
                console.log(response, 'Resposta');
            }).catch((error)=>{
                console.log(error, 'Erro');     
                console.log("cadê a porra do erro")       })
             //setPaths(response.data);
             console.log("erro do caralho")
        }
        loadPaths();
     }, []);

    return (

        <div className="caminhamentos">

            <h1>{paths.name}</h1>

            <Map/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc tempus porta arcu, et tristique mi venenatis ut. 
                Curabitur vitae ligula nunc. Duis sagittis, justo fermentum vulputate cursus, 
                dolor lacus egestas magna, id imperdiet nulla urna id arcu.</p>

            <div className="ponto">
                <p>Ponto de interesse</p>
            </div>

            <div className="ponto">
                <p>Ponto de interesse</p>
            </div>

            <div className="ponto">
                <p>Ponto de interesse</p>
            </div>


            <div className="opcoes">

            <a href="#abrirModal">Excluir</a>

            <div id="abrirModal" className="modal">
                <h2>Quer excluir esse caminhamento?</h2>
                <button className="excluir" type="submit">Excluir</button>
                <a href="#fechar" title="Fechar" class="fechar">Cancelar</a>
            </div>

            <a href="#editarcaminho">Editar</a>

            <div id="editarcaminho" className="modal">

                <form id="FormCaminho">

                <h2>Editar Caminhamento</h2>
                <label htmlFor="nomecaminhamento"></label>

                <div className="input-block">
                <input name="nomecaminhamento" 
                type="text" 
                placeholder="Nome Caminhamento"
                id="nomecaminhamento"
                />
                </div>

                <div className="input-block">
                <textarea name="descricaocaminho" form="FormCaminho">Descrição Caminhamento</textarea>
                </div>

                <div className="input-block">
                <input name="pontodeinteresse" 
                type="text" 
                placeholder="Nome Ponto de Interesse"
                id="pontodeinteresse"
                />
                </div>

                <div className="input-block">
                <input name="pontodeinteresse" 
                type="text" 
                placeholder="Nome Ponto de Interesse"
                id="pontodeinteresse"
                />
                </div>

                <div className="input-block">
                <input name="pontodeinteresse" 
                type="text" 
                placeholder="Nome Ponto de Interesse"
                id="pontodeinteresse"
                />
                </div>

                <button className="salvar" type="submit">Salvar</button>
                <a href="#fechar" title="Fechar" class="fechar">Cancelar</a>

                </form>

            </div>

            </div>

        </div>

    );
}

export default Caminho;