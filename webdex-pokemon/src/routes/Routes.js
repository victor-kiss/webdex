import React from 'react'

import {Route,Redirect,Switch} from 'react-router'

import Home from '../pages/Home'
import Curiosities from '../pages/Curiosities'
import DClick from '../pages/DontClick'
export default function Routes(){
   return(
    <Switch>
        <Route exact path="/webdex-inicio" component={Home}/>
        <Route path="/curiosidades-sobre-pokemon" component={Curiosities}/>
        <Route path="/nao-clique" component={DClick}/>
        <Redirect from="*" to="/webdex-inicio"/>
    </Switch>
   )
}