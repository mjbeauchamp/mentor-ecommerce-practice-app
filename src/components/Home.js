import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import routes from '../routes'
import Navbar from "./Navbar"

class Home extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <button>Show Alert</button>
                {routes}
            </div>
        )
    }
}

export default withRouter(Home)