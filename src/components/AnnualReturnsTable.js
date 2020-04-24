import React from 'react';
import { Table } from 'reactstrap';
import './AnnualReturnsTable.css';

const AnnualReturnsTable = (props) => {
    return(
        <div className="container">
            <p className="title">S&P 500 Total Returns By Year</p>
            <div className="table-container">
                <Table striped>
                    <thead>
                        <tr>
                        <th>Year</th>
                        <th>Total Return</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.returnsData.map((data)=>{
                            return(
                                <tr>
                                    <td>{data.year}</td>
                                    <td>{data.totalReturn}</td>
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
