import React, { Component } from 'react';
import './App.css';
import Circle from './Components/Circle';
import clickSound from './assets/sounds/clickSound.wav';
import endSound from './assets/sounds/endSound.wav';
import gameSound from './assets/sounds/gameSound.wav';
import Modal from './Components/Modal';

class App extends Component {
state = {
  circles: ['first', 'second', 'third', 'fourth'],
  score: 0,
  active: 0,
  timer: '',
  pace: 1000,
  rounds: 0,
  clickSound: new Audio(clickSound),
  endSound: new Audio(endSound),
  gameSound: new Audio(gameSound),
  modal:false
 
}
getRndInt = (min, max) => Math.floor(Math.random()*(max-min+1)) + min

clickHandler = (index) =>{
  this.state.clickSound.play();
if(index === this.state.active){
  this.setState({score:this.state.score + 10})
this.pickNew(this.state.active);
this.setState({rounds: 0});

} else {
  this.endGame();
}
}

enableCircles = () =>{
   document.getElementById('circle-container').style.pointerEvents = 'auto';
}

startGame = () => {
  if(this.state.pace >= 1000) {
    this.state.gameSound.play();
}
  if(this.state.rounds >= 4){
    return this.endGame();
  }
  document.getElementById('start-btn').classList.add('hidden');
  document.getElementById('end-btn').classList.remove('hidden');
  this.enableCircles();
  this.pickNew(this.state.active);
  this.setState({timer: setTimeout(this.startGame, this.state.pace)})
  this.setState({pace: this.state.pace - 10});
  this.setState({rounds: this.state.rounds + 1});
}
pickNew(active) {
  const nextrandom = this.getRndInt(0,3);
if(nextrandom !== this.state.active){
  this.setState({active:nextrandom})
} else {
  this.pickNew(active);
}
}

endGame = () => {
  this.state.endSound.play();
  clearTimeout(this.state.timer);
  document.getElementById('start-btn').classList.remove('hidden');
  document.getElementById('end-btn').classList.add('hidden');
  this.setState({pace: 1000});
  this.setState({rounds: 0});
  this.setState({modal: true});
}


  render() {
    return (
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen'>
        <header className='p-5 text-center text-slate-600 font-bold'>Welcome to speed Game</header>
        <p className='font-bold text-center'>Score: {this.state.score}</p>
        <div id='circle-container' className='flex flex-wrap justify-evenly pointer-events-none'>
        {this.state.circles.map((item, index) => item = <Circle
         key={index}
         active = {this.state.active}
         indexNumber = {index}
         clickHandler={this.clickHandler}
         
         ></Circle>
        )}
        </div>
        <div className='text-center'>
        <button id='start-btn' onClick={this.startGame} className='btn btn-success'>Start Game</button>
        <button id='end-btn' onClick={this.endGame} className='btn btn-warning hidden'>End Game</button>
        </div>
        <div>
          {this.state.modal === true && <Modal
          score = {this.state.score}
          ></Modal>}
        </div>
      </div>
    );
  }
}

export default App;


