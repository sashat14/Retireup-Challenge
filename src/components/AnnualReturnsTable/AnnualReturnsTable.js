import React from 'react';
import { Table } from 'reactstrap';
import './AnnualReturnsTable.css';

const AnnualReturnsTable = (props) => {

    const calcReturns = (idx)=>{
        let total=0;
        let cumulative=0;
        for(let i=0; i<=idx; i++){
          total+=Number(props.returnsData[i].totalReturn)
          cumulative=total.toFixed(2)
        }
        return cumulative
      }

    return(
        <div className="table-container-container">
            <div className="table-container">
                <Table aria-label="S&P 500 Total Returns By Year" striped>
                    <thead>
                        <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Total Return</th>
                            <th scope="col">Cumulative Returns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.returnsData.map((data, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.year}</td>
                                    <td>{data.totalReturn}</td>
                                    <td>{calcReturns(index)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default AnnualReturnsTable;
