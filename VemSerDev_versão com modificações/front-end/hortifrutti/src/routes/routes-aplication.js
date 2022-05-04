import React from "react";
import { Route, Switch} from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import AdicionarUsuario from "../pages/AdicionarUsuario";

export default function RoutesAplication(){
    return(
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/createUser' component={AdicionarUsuario}/>
                <Route path='/:userId' component={App}/>
            </Switch>
    ) 
}