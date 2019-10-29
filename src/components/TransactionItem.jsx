import React from "react";
import Moment from 'react-moment'; // format date

const formatAmount = (amount) => {
    return (amount / 100).toLocaleString("de-DE", {style:"currency", currency:"EUR"})
};

const TransactionItem = (props) => {
    return (<div>
            <Moment format="DD.MM.YYYY">
                {props.bookingDate}
            </Moment> {props.purpose ? `/ ${props.purpose}` : ""}
            <span className={props.amount > 0 ? `amount` : `amount minus`}>{formatAmount(props.amount)}</span>
            <br />{props.name} <small>{props.iban}</small>
        </div>
    )
};

export default TransactionItem;
