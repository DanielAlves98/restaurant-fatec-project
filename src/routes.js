import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Categoria from './Pages/Categoria'
import Cadastro from './Pages/Cadastro'

const Routes = () => (
    <Switch> 
        <Route path="/" exact component={Home} /> 
        <Route path="/categoria" component={Categoria}/>
        <Route path="/cadastro" component={Cadastro}/>
    </Switch>
);



export default Routes;
