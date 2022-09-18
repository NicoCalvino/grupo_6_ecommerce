import React from "react"
import { useEffect, useState } from "react";
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Row from "./Row";

function Table(props) {
    const [productos, setDataProd] = useState([])

	useEffect(()=>{
		fetch("http://localhost:4000/api/products"
		).then(response => response.json()).then(data => {
            setDataProd(data.data)
			})},[])

    const { columns = ["NOMBRE","MARCA"] } = props;


    return(
        <div>
            <table className="table">
                <thead>
                <tr>
                    {
                        columns.map((column, i) => <th key={column + " " + i}>{ column }</th> )
                    }
                </tr>
                </thead>
                <tbody>
                    { productos.map((prod, i) => <Row key={ prod.name + i } rowData={prod} columns={columns}/>) }
                </tbody>
            </table>
            
        </div>
    )
}

export default Table;