import React from 'react'
import {Route, Switch} from 'react-router-dom'
import StoreFront from './components/StoreFront'
import Login from './components/Login'
import Register from './components/Register'
import UserCart from './components/UserCart'

export default (
    <Switch>
        <Route path="/store_front" component={StoreFront}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/user_cart/:id" component={UserCart}/>
    </Switch>
)