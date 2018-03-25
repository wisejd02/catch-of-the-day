import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import StorePicker from './StorePicker';
import NotFound from './NotFound';
const Router = () =>(
    <BrowserRouter>
        <Switch>
            {/* if route is / takes us to store picker*/}
            <Route exact path='/' component={StorePicker}/>
            {/* route will take store picker etry and route to page */}
            <Route exact path='/store/:storeId' component={App}/>
            {/* if route is  */}
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default Router;