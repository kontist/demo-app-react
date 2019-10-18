import React from "react";

const formatAmount = (amount) => {
    return (amount / 100).toLocaleString("de-DE", {style:"currency", currency:"EUR"})
};

const TransactionItem = (props) => {
    return (<div>
        {props.date} / {props.purpose}
            <span className={props.amount > 0 ? `amount` : `amount minus`}>{formatAmount(props.amount)}</span>
            <br />{props.from}
            <br />{props.to}
        </div>
    )
};

export default TransactionItem;
