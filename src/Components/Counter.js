import React, {Component} from 'react';
import './Counter.css'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Emmi",
            count: 0
        }
        this.increment = this.increment.bind(this);
    }
    increment() {
        this.setState({
            count: this.state.count+1
        })
    }
    render() {
        if(this.state.count >= 15){
            return(
                <div className="container">
                    <h1>Hello {this.state.name}</h1>
                    <button type="button" className="btn btn-outline-danger" onClick={this.increment}>Click me</button>
                    <h5>You clicked me {this.state.count} times</h5>
            </div>
            )
        } else {
            return (
                <div className="container">
                    <h1>Hello {this.state.name}</h1>
                    <button type="button" className="btn btn-outline-primary" onClick={this.increment}>Click me</button>
                    <h5>You clicked me {this.state.count} times</h5>
                </div>
            )
        }
    }
}

export default Counter;