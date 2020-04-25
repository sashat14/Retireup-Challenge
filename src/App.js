import React, { useState } from 'react';
import './App.css';
import returns from './data/annualReturnsData.js';
import AnnualReturnsTable from './components/AnnualReturnsTable/AnnualReturnsTable.js';
import AnnualReturnsSlider from './components/AnnualReturnsSlider/AnnualReturnsSlider.js';

function App() {
  const [returnsData, setReturnsData] = useState(returns);
  const [startYear, setStartYear] = useState(1926);
  const latestYear = returnsData[returns.length-1].year;
  const [endYear, setEndYear] = useState(latestYear);


  const handleSlideChange = (values)=>{
    setStartYear(values[0]);
    setEndYear(values[1]);
  }

  const filterData = ()=>{
    let sortedData = returnsData.sort((a,b)=>{
      return a.year - b.year
    });

    let filteredData = sortedData.filter((data)=>{
      return data.year >= startYear && data.year <= endYear;
    })
    return filteredData
  }

  return (
    <div className="App">
      <AnnualReturnsSlider startYear={startYear} 
                           endYear={endYear} 
                           latestYear={latestYear} 
                           handleSlideChange={handleSlideChange} 
                           />
      <AnnualReturnsTable returnsData={filterData()} />   
    </div>
  );
}

export default App;
