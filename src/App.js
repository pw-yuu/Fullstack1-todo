import React from 'react';
import axios from 'axios';
import './App.css';


//components
import InputTodo from './components/InputTodo'
import ListTodos from './components/ListTodos'



function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          To <span className="App-logo">🦄</span> do
        </header>
      </div>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
}

export default App;