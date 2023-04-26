import React, { Component } from 'react';
import './App.css';
import Circle from './Components/Circle';
import clickSound from './assets/sounds/clickSound.wav';
import endSound from './assets/sounds/endSound.wav';
import gameSound from './assets/sounds/gameSound.wav';
import Modal from './Components/Modal';
import image from './assets/istockphoto-1132395683-612x612.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
state = {
  circles: '',
  score: 0,
  active: 0,
  timer: '',
  pace: 1500,
  rounds: 0,
  clickSound: new Audio(clickSound),
  endSound: new Audio(endSound),
  gameSound: new Audio(gameSound),
  modal:false,
  firstValue:0,
  secondValue:3,
  buttonAction: 'disabled'
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
}}

enableCircles = () =>{
   document.getElementById('circle-container').style.pointerEvents = 'auto';
}

startGame = () => {
  console.log('hello');
  if(document.getElementById('select_level').value !== 'level'){
    document.getElementById('select_level').classList.add('hidden');
  if(this.state.pace >= 1500) {
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
  } else {
    alert('please select game level');
  }
  
}

pickNew(active) {
  if(document.getElementById('select_level').value === 'medium'){
    this.setState({firstValue: 0});
    this.setState({secondValue: 4});
    this.setState({circles: ['first', 'second', 'third', 'fourth', 'five']});
  } else if (document.getElementById('select_level').value === 'difficult'){
    this.setState({firstValue: 0});
    this.setState({secondValue: 5});
    this.setState({circles: ['first', 'second', 'third', 'fourth', 'five', 'six']});
  } else if(document.getElementById('select_level').value === 'easy') {
    this.setState({firstValue: 0});
    this.setState({secondValue: 3});
    this.setState({circles: ['first', 'second', 'third', 'fourth']});
  } else {
    this.setState({circles: ''});
  }
  const nextRandom = this.getRndInt(this.state.firstValue, this.state.secondValue);
if(nextRandom !== this.state.active){
  this.setState({active:nextRandom})
} else {
  this.pickNew(active);
}}

endGame = () => {
    this.state.endSound.play();
  clearTimeout(this.state.timer);
  document.getElementById('start-btn').classList.remove('hidden');
  document.getElementById('end-btn').classList.add('hidden');
  this.setState({pace: 1500});
  this.setState({rounds: 0});
  this.setState({modal: true});
  document.getElementById('select_level').classList.remove('hidden');
}
changeButtonValue = (e) => {
  if (e.target.value !== 'level') {
    document.getElementById("start-btn").classList.remove('btn-disabled');
    document.getElementById("start-btn").classList.add('animate-bounce');
    document.getElementById("welcome-line").classList.add('hidden');

  } else {
    document.getElementById("start-btn").classList.add('btn-disabled');
    document.getElementById("welcome-line").classList.remove('hidden');
  }
  
}

  render() {
    return (
      <div className='antialiased font-mono relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen'>
        <header className='p-5 text-center text-yellow-200 font-bold'>Welcome to speed Game</header>
        <p className='font-bold text-center text-yellow-200'>Score: {this.state.score}</p>
        <select id='select_level' defaultValue='level' className="sm:select sm:select-accent w-16 sm:w-32 absolute top-2 right-2 bg-black text-green-500" onChange={this.changeButtonValue}>
  <option value='level'>level</option>
  <option value='easy'>Easy</option>
  <option value='medium'>Medium</option>
  <option value='difficult'>Difficult</option>
</select>

        <div id='circle-container' className='grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center pointer-events-none'>
        {this.state.circles !== '' && this.state.circles.map((item, index) => item = <Circle
         key={index}
         active = {this.state.active}
         indexNumber = {index}
         clickHandler={this.clickHandler}
         ></Circle>
        )}
        </div>

        <div id='welcome-line'>
        {this.state.circles === '' && <div className='flex justify-center items-center p-5'>
<div className='avatar animate-move'>
<div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    
<img src={image} alt=''></img>
  </div>
  </div>
</div>
  }
        <div className="text-center">
    <p className='text-warning p-2'>Please select the game level first <FontAwesomeIcon className='animate-bounce' icon={faSquareArrowUpRight} /> </p> 
</div>
        </div>
        <div className='text-center'>
        <button id='start-btn' onClick={this.startGame} className='btn btn-success btn-disabled rounded-full'>Start Game</button>
        <button id='end-btn' onClick={this.endGame} className='btn btn-warning hidden rounded-full'>End Game</button>
        </div>
        
        <div>
          {this.state.modal === true && <Modal
          score = {this.state.score}
          ></Modal>}
        </div>
      </div>
    );
  }}

export default App;


