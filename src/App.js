import React, { Component } from 'react';
import Planets from './components/planets';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state={
            pilot: '',
            planets: [],

        }
    }
    handleNameChange(event) {
   this.setState({
       pilot: event.target.value});
 }

 handleSubmit(event) {
   this.setState(
     {
       pilot: this.state.value,

     }
   )
 }
    componentDidMount() {
    fetch('https://swapi.co/api/planets/').then((response) => {
      return response.json()
    }).then((data) => {
      let planets = data.results;
      console.log(planets)
      this.setState({planets: planets})
    })
  }
  render() {
    return (
      <div className="App">
          <h2 >What is your name, pilot?</h2>
          <input  onChange={(event)=>this.handleNameChange(event)} type="text" value={this.state.value} placeholder="Enter your name"/>

          <h1>Welcome to our Planet, {this.state.pilot}</h1>
          <Planets planets={this.state.planets}/>
      </div>
    );
  }
}

export default App;
