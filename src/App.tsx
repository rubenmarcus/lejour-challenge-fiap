import React from 'react';
import './App.css';
import PanelComponent from './components/Panel/Panel';

function App() {
  return (
    <div className="App">

      <main>
        <div className="container">
        <PanelComponent endpoint="wedding" />

        </div>
      </main>
    </div>
  );
}

export default App;
