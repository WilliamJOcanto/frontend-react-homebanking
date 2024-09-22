import { Link } from "react-router-dom";

function CardAccounts(props) {
  return (
    <div
      className={`flex flex-col justify-center items-start border border-solid border-[#4C4C4A] p-8 rounded-xl bg-[#A1ADAD] text-black font-bold  ${props.divSize}`}
    >
      {props.showLink ? (
        <Link to={props.link}>
          <h2 className="mb-2 text-lg">{props.title}</h2>
          <span className="text-2xl ml-12 my-2">{props.content}</span>
          <p className="my-2 text-lg">{props.balanceOrAmount}</p>
          <p className="text-3xl text-center mb-6">${props.amount}</p>
          <span className={props.stylePayments}>Monthly payments:</span>
          <span style={{ marginLeft: "10px" }}>{props.payments}</span>
          <p className={props.styleDate}>
            <span>Creation date:</span>
            <span style={{ marginLeft: "10px" }}>{props.creationDate}</span>
          </p>
        </Link>
      ) : (
        <>
          <h2 className="mb-2 text-lg">{props.title}</h2>
          <span className="text-2xl ml-12 my-2">{props.content}</span>
          <p className="my-2 text-lg">{props.balanceOrAmount}</p>
          <p className="text-3xl text-center mb-6">${props.amount}</p>
          <span className={props.stylePayments}>Monthly payments:</span>
          <span style={{ marginLeft: "10px" }}>{props.payments}</span>
          <p className={props.styleDate}>
            <span>Creation date:</span>
            <span style={{ marginLeft: "10px" }}>{props.creationDate}</span>
          </p>
        </>
      )}
    </div>
  );
}

export default CardAccounts;

// w-[380px] h-[260px]
