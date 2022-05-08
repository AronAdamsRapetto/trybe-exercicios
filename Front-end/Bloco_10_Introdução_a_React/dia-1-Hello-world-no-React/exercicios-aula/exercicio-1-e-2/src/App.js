import React from 'react';
import './App.css';

const tarefas = ['Limpar a casa', 'terminar os exercicios do dia', 'dar atenção para a esposa']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
} 

function App() {
  return tarefas.map((elemento) => Task(elemento)); 
}

export default App;
