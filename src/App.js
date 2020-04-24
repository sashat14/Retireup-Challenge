import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import returns from './data/annualReturnsData.js';
import AnnualReturnsTable from './components/AnnualReturnsTable';

function App() {
  const [returnsData, setReturnsData]= useState(returns);
  console.log(returnsData);
  return (
    <div className="App">
      <AnnualReturnsTable returnsData={returnsData} />   
    </div>
  );
}

export default App;
