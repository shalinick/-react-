import React,{Component} from 'react';
import './App.css';
import OfficeSpace from './OfficeSpace/OfficeSpace';
class App extends Component{
    state={
        item:[
            {Name:"DBS",Rent:50000,Address:"Chennai",
                image:"https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},

        ]
    }
    render(){
        const element = "Office Space"
        return(
            <div>
                <h1>{element},at Affordable Range</h1>
                <div className="div1">
                    <OfficeSpace item={this.state.item}/>
                </div>
            </div>
        )
    }
}
export default App;
