//import React, { Component } from 'react';
import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
// Don't need "Person.js" -> the build takes care of that + 'Person' must be uppercase after the import
import Person from './Person/Person';

// This is not HTML, but JSX - JavaScript at runtime
// It has limitations, e.g.: class cannot be used, that's why we need to use className instead
// It is typical to use one root element to return, just like below - even though it is not a strict limitation

// state property can be used due we are extending Component here - React Hooks makes it available elsewhere; state should be used with care
// state's speciality is that if it is changes, it will lead React to update the DOM
// class App extends Component {

// Hooks are replacing, not merging the state, with Hooks we don't need to use class based components
const app = props => { 
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other state'
  });

  // We are doing another useState, so the otherState stays even after update, it is needed because of hooks
  const [otherState, setOtherState] = useState('some other value')
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log('Clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilan';
    // This is a merge, will leave any other state untouched
    setPersonsState({
      persons: [
        { name: 'Maximilan', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    });
  };

//  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'));
  };

export default app;