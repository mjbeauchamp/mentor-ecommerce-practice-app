import React, {Component} from 'react'
import axios from 'axios'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            name: "",
            patronus: ""
        }
    }

    register = async () => {
        let {username, password, name, patronus} = this.state
        try {
            if(!username || !password || !name || !patronus) return alert("Please complete all information")
            let result = await axios.post("/register", {
                username,
                password,
                name,
                patronus
            })
            console.log(result)
        } 
        catch(error){
            console.log(error)
        }
    }

    render(){
        console.log(this.state.username, this.state.password)
        return (
            <div>
                <h1>Register</h1>
                <input 
                    onChange={(e) => {this.setState({name: e.target.value})}}
                    value={this.state.name}
                    type="text"
                    placeholder="Name"/>
                <input 
                    onChange={(e) => {this.setState({patronus: e.target.value})}}
                    value={this.state.patronus}
                    type="text"
                    placeholder="Patronus"/>
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
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}

export default Register