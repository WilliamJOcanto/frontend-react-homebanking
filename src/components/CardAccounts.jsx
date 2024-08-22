import { Link } from "react-router-dom";

function CardAccounts(props) {
  return (
    <div className="flex flex-col border-2 border-solid border-white py-4 px-6 w-[300px] h-[250px] rounded-xl bg-[#f2c036] text-black font-bold shadow-[6px_6px_6px_rgba(0,0,0,0.8)]  hover:bg-[#16374e] hover:text-gray-100 hover:border-[#f2c036] hover:border-4 transition-transform hover:translate-y-1 transition-colors duration-[1s]">
      <Link to={props.link}>
        <h2 className="mb-2 text-lg">{props.title}</h2>
        <span className="text-2xl ml-12 my-2">{props.content}</span>
        <p className="my-2 text-lg">Amount: </p>
        <p className="text-3xl text-center mb-6">${props.amount}</p>
        <p className={props.stylePayments}>
          Monthly payments: {props.payments}
        </p>
        <p className={props.styleDate}>Creation date: {props.creationDate}</p>
      </Link>
    </div>
  );
}

export default CardAccounts;
