// We don't need a component here, since we are not going to use classes
import React from 'react';

// Using ES6 for its features and to make the useage of 'this' easier
const person = () => {
    return <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
}

export default person;