// Используя хуки useState и useEffect реализовать компонент, который получает и отображает даннве с сервера
// https://www.boredapi.com/api/activity

import React from 'react';
import './App.css';
import DataFromServer from './DataFromServer/DataFromServer';

function App() {
  return (
    <div className="App">
      <DataFromServer />
    </div>
  );
}

export default App;
