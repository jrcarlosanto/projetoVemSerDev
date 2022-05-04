import React from "react";
import { Route, Switch} from "react-router-dom";
import Inicio from "../pages/Inicio";
import Produtos from "../pages/Produtos";
import AdicionarProduto from "../pages/AdicionarProduto";
import DetalhesProduto from "../pages/DetalhesProduto";
import EditarProduto from "../pages/EditarProduto";

export default function Routes(){
    return(
            <Switch>
                <Route path='/:userId' exact component={Inicio}/>
                <Route path='/produtos/:userId' component={Produtos}/>
                <Route path='/adicionar/:userId' component={AdicionarProduto}/>
                <Route path='/detalhes/:userId/:id' component={DetalhesProduto}/>
                <Route path='/editar/:userId/:id' component={EditarProduto}/>
            </Switch>
    ) 
}