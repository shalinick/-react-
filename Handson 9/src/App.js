import React,{Component} from 'react';
import LoginButtonController from './ButtonController/LoginButtonController';
import './App.css';
class App extends Component{
   render(){
    return (
      <div className="App">
        <LoginButtonController />
      </div>
    )
  }
}
export default App;