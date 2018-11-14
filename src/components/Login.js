import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    login = async () => {
        try {
            let user = await axios.get("/find_user")
        } 
        catch(error){

        }
    }

    render(){
        console.log(this.state.username, this.state.password)
        return (
            <div>
                <h1>Login</h1>
                <input 
                    onChange={(e) => {this.setState({username: e.target.value})}}
                    value={this.state.username}
                    type="text"
                    placeholder="Username"/>
                <input 
                    onChange={(e) => {this.setState({password: e.target.value})}}
                    value={this.state.password}
                    type="password"
                    placeholder="Password"/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login