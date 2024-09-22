import React from "react";

function Table({ transactions = [] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Time</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => {
          const dateObject = new Date(transaction.dateTransaction);
          const optionsDate = {
            year: "numeric",
            month: "long",
            day: "numeric",
          };
          const formattedDate = dateObject.toLocaleDateString(
            "en-US",
            optionsDate
          );

          // Extraer y formatear la hora
          const optionsTime = {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true, // Para formato de 12 horas (AM/PM)
          };
          const formattedTime = dateObject.toLocaleTimeString(
            "en-US",
            optionsTime
          );
          const formattedAmount = transaction.amount.toLocaleString("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          });
          const amountColor =
            transaction.amount < 0 ? "text-red-600" : "text-green-700";
          return (
            <tr key={transaction.id}>
              <td className={`${amountColor}`}>
                {transaction.transactionType}
              </td>
              <td className={`text-right ${amountColor}`}>
                ${formattedAmount}
              </td>
              <td>{formattedDate}</td>
              <td>{formattedTime}</td>
              <td>{transaction.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
