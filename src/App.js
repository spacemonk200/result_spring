import React from 'react';
import ResultList from './components/ResultList';
import ResultForm from './components/ResultForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>VIT Semester Result Management</h1>
      <ResultForm />
      <ResultList />
    </div>
  );
}

export default App;
