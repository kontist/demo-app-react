import React, { useState, useEffect } from "react";
import TransactionItem from "./TransactionItem";
import {userService} from "../services/user.service";
import { Spinner } from "reactstrap";
import kontistClient from "../services/kontist.service";

const formatAmount = (amount) => {
    return (amount / 100).toLocaleString("de-DE", {style:"currency", currency:"EUR"})
};

const Transactions = (props) => {
    const [transactions, setTransactions ] = useState(null);

    useEffect(() => {
        document.title = "Transactions";
        kontistClient.models.transaction.fetchAll().then(function (transactions) {
            setTransactions(transactions)
        }).catch(function (error) {
            // TODO: error handling, for now just delete token and force re-authentication
            userService.clearAuthentication();
            props.history.push("/");
        })
    }, [props]);


    return (<div className={"center"}>
            <h3>{formatAmount(12345)}</h3> {/* TODO: get real balance */}
            <h6>Your balance</h6>
            <div className={"transactions"}>
                {transactions ? (
                    transactions.map(transaction => {
                        return <TransactionItem key={transaction.id} {...transaction} />
                    })
                ) : (
                    <Spinner className={"spinner-centered"} />
                )}
            </div>
        </div>
    )
};

export default Transactions;
