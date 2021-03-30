import React ,{Component} from 'react';
import ListOfPlayers from './LIST_OF_PLAYERS/ListOfPlayers';
import ScoreBelow70 from './LIST_OF_PLAYERS/ScoreBelow70';
import OddPlayers from './INDIAN_PLAYERS/OddPlayers';
import EvenPlayers from './INDIAN_PLAYERS/EvenPlayers';
import {IndianPlayers} from './INDIAN_PLAYERS/IndianPlayers';
import ListOfIndianPlayers from './INDIAN_PLAYERS/ListOfIndianPlayers';
const players= [
    {name:'Virat',score:91},
    {name:'Malinga',score:54},
    {name:'Bumrah',score:85},
    {name:'Pujara',score:62},
    {name:'Kapil Dev',score:75},
    {name:'Yuvraj',score:88},
    {name:'meghana',score:78},
    {name:'Sharmila',score:60},
    {name:'tarani',score:46},
    {name:'Sowji',score:80},
    {name:'divakar',score:60}
  ];
  const IndianTeam = [
    "Sachin1",
    "Dhoni2",
    "Virat3",
    "Rohit4",
    "Yuvraj5",
    "Raina6",
  ];
  
  class App extends Component{
    render(){
      var flag = true;
      if(flag){
        return (
          <div>
            <h1>List of Players</h1>
            <ListOfPlayers players={players} />
            <hr />
            <h1>List of Players having Scores Less than 70</h1>
            <ScoreBelow70 players={players}/>
          </div>
        )
      } else{
        return (
          <div>
            <div>
              <h1>Indian Team</h1>
              <h1>Odd Players</h1>
              {OddPlayers(IndianTeam)}
              <hr/>
              <h1>Even Players</h1>
              {EvenPlayers(IndianTeam)}
            </div>
            <hr/>
            <div>
              <h1>List of Indian Players Merged</h1>
              <ListOfIndianPlayers IndianPlayers={IndianPlayers}/>
            </div>
          </div>
        )
      }
    }
  }
  export default App;
