import React from 'react'

const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text} <span>-$500</span><button className="delete-btn">x</button>
    </li>
  );
}

export default Transaction;