import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import Home from '../pages/Home/index';
import Entrar from '../pages/Entrar/index';
import Cadastrar from '../pages/Cadastrar/index';
import Projetos from '../pages/Projetos/index';
import Caminhamentos from '../pages/Caminhamentos/index';
import EditarPerfil from '../pages/EditarPerfil/index';
import Route from './Route';

function Routes () {

    return (

        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/entrar" component={Entrar}/>
                <Route path="/cadastrar" component={Cadastrar}/>
                <Route path="/projetos" component={Projetos} isPrivate/>
                <Route path="/caminhamentos" component={Caminhamentos} isPrivate/>
                <Route path="/editarperfil" component={EditarPerfil} isPrivate/>
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;