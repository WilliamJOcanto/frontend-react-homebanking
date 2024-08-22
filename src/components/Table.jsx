import React from "react";

function Table({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.transactionType}</td>
            <td className="text-right">${transaction.amount}</td>
            <td>{transaction.dateTransaction}</td>
            <td>{transaction.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
