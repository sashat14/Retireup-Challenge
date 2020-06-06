import React, { useRef, useEffect } from 'react';
import { select,
        scaleLinear,
        max,
        scaleBand,
        axisLeft,
        axisBottom,
        format } from 'd3';


const AnnualReturnsGraph = (props)=>{
    const svgRef = useRef();
    const svg = select(svgRef.current);
    console.log(svg)

    // useEffect((props)=>{ 
    //     renderGraph()
    // },[props.returnsData])
    // console.log(props.returnsData)

    // const width = Number(svg.attr('width'));
    // const height = Number(svg.attr('height'));

    // // const renderGraph = (props)=>{
    // const margin = { top: 50, right: 40, bottom: 77, left: 180 };
    // const innerWidth = width - margin.left - margin.right;
    // const innerHeight = height - margin.top - margin.bottom;

    // const xScale = scaleBand()
    //     .domain(props.returnsData.map((data)=>data.year))
    //     .range([0, 500])
    //     .padding(0.1);

    //const yScale = scaleLinear()
    // }

    return(
        <div>
            <svg ref={svgRef}></svg>
        </div>
    )
}

export default AnnualReturnsGraph;

