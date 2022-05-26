import React, {Component} from 'react';

const Login = () => {
    return(<h3>Login</h3>)
}
const Logout = () => {
    return(<h3>Logout</h3>)
}
export default class RenderCondicional extends Component {
    constructor(){
        super();

        this.state = {
            session: false,
        }
    }
    render(){
        return(
            <div>
                <h1>Renderizado condicional</h1>
                {this.state.session ? <Login/> : <Logout/>}
                <hr/>
            </div>
        )
    }
}