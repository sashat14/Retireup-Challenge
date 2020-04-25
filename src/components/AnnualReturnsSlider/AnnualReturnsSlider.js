import React from 'react';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import './AnnualReturnsSlider.css';

const AnnualReturnsSlider = (props)=>{

    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    return(
        <div className="container">
            <div className="range-container">
                <Range min={1926} 
                       max={props.latestYear} 
                       defaultValue={[props.startYear, props.endYear]}
                       tipFormatter={value => value} 
                       onAfterChange={props.handleSlideChange}
                       />
            </div>
        </div>
    )
}

export default AnnualReturnsSlider;
