import React from 'react';
import './App.css';
import VendingMachine from './VendingMachine';

const App : React.FC = () => {
  return (
    <div className="app">
      <div className="app__body">
        <VendingMachine />
      </div> 
    </div>
  );
}

export default App;