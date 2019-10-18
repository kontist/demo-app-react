import React from "react";
import client from "../mockup/client";
import TransactionItem from "./TransactionItem";

const formatAmount = (amount) => {
    return (amount / 100).toLocaleString("de-DE", {style:"currency", currency:"EUR"})
};

const Transactions = (props) => {
    return (<div className={"center"}>
            <h3>{formatAmount(client.getUser().balance)}</h3>
            <h6>Your balance</h6>
            <div className={"transactions"}>
                {client.getTransactions().map(transaction => {
                return <TransactionItem key={transaction.id} {...transaction} />
                })}
            </div>
        </div>
    )
};

export default Transactions;
