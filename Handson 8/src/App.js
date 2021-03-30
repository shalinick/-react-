import React,{Component} from 'react';
import './App.css';
import Form from './Form/Form';
class App extends Component{
    state={
        count:0
    }
    Increment=()=>{
        alert("Hello Member!");
        return this.setState({
            count:this.state.count+1
        })
    }
    Decrement=()=>{
        return this.setState({
            count:this.state.count-1
        })
    }
    Welcome=()=>{
        alert("Welcome");
    }
    OnPress=()=>{
        alert("I was clicked");
    }
    render(){
        return(
        <div className="App">
            <h3>{this.state.count}</h3>
            <button onClick={this.Increment}>Increment</button>
            <button onClick={this.Decrement}>Decrement</button>
            <button onClick={this.Welcome}>Say Welcome</button>
            <button onClick={this.OnPress}>Click Me</button>
            <h1 className="head">Currency Convertor!!!</h1>
            <Form />
        </div>
        )
    }  
}
export default App;