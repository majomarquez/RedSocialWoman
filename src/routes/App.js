import React from 'react';
import {BrowserRouter ,Switch, Route} from 'react-router-dom';
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import NoFound from '../containers/NotFound'
import Layout from  '../components/Layout'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register} />
            <Route  component={NoFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;
// el () remplaza return ,
//  el browserroute encapsula toda la aplicacion
//  la ruta es exact por que cuando entren ahi solo va a mostrar ese componente
