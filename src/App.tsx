import React from 'react';
import './App.css';
import PanelComponent from './components/Panel/Panel';

function App() {
  return (
    <div className="App">

      <main>
        <PanelComponent endpoint="wedding" />
      </main>
    </div>
  );
}

export default App;
