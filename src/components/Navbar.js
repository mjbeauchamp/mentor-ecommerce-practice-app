import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

class Navbar extends Component {
    render(){
        console.log(this.props)
        let userID = 1;
        let loggedIn = false;
        let myLinks;
        if(loggedIn){
            myLinks = (
                <div>
                    <Link to="/store_front">Shop</Link>
                    <Link to={`/user_cart/${userID}`}>My Cart</Link>
                    <button>Logout</button>
                </div>
            )
        } else {
            myLinks = (
                <div>
                    <Link to="/store_front">Shop</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            )
        }
        return (
            <div>
                {myLinks}
            </div>
        )
    }
}

export default withRouter(Navbar)