import React from "react";
import { Route, Switch} from "react-router-dom";
import Inicio from "./pages/Inicio";
import Produtos from "./pages/Produtos";
import AdicionarProduto from "./pages/AdicionarProduto";
import DetalhesProduto from "./pages/DetalhesProduto";
import EditarProduto from "./pages/EditarProduto";

export default function Routes(){
    return(
            <Switch>
                <Route path='/' exact component={Inicio}/>
                <Route path='/produtos' component={Produtos}/>
                <Route path='/adicionar' component={AdicionarProduto}/>
                <Route path='/detalhes/:id' component={DetalhesProduto}/>
                <Route path='/editar/:id' component={EditarProduto}/>
            </Switch>
    ) 
}