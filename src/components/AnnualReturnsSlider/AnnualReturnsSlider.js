import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './AnnualReturnsSlider.css';

const AnnualReturnsSlider = (props)=>{

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);  
 
    
    return(
        <div className="range-container-container">
            <div className="range-container">
                <Range min={1926} 
                       max={props.latestYear} 
                       defaultValue={[props.startYear, props.endYear]}
                       tipFormatter={value => value}
                       onAfterChange={props.handleSlideChange}
                       ariaLabelGroupForHandles={["start year", "end year"]}
                       ariaValueTextFormatterGroupForHandles={[(value) => `Starting year ${value}`, (value) => `Ending year ${value}`]}
                       />
            </div>
        </div>
    )
}

export default AnnualReturnsSlider;
