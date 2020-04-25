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
        <div className="container">
            <p className="title">S&P 500 Total Returns By Year</p>
            <div className="table-container">
                <Table striped>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Total Return</th>
                            <th>Cumulative Returns</th>
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
