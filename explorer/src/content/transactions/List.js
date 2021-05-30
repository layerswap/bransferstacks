import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { getAll } from "../../services/transactions"


const columns = [
    {
        name: "Time",
        selector: "time",
    },
    {
        name: "Asset",
        selector: "asset",
    },
    {
        name: "Amount",
        selector: "amount",
        right: true
    },
    {
        name: "Destination",
        selector: "destination",
    },
    {
        name: "Status",
        selector: "status",
        right: true
    }
];
createTheme('dark_greenlime', {

    background: {
        default: '#18191b',
    },
    text: {
        primary: '#d2d2d2',
        secondary: '#d2d2d2',
    },
});
export default function List() {

    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getAll().then(res => {
            setTransactions(res)
        })
    });

    return (
        <div>
            <DataTable
                title="Transactions"
                columns={columns}
                data={transactions}
                defaultSortField="title"
                pagination
                theme="dark_greenlime"
            />
        </div>
    );
}

