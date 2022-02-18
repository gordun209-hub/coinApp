import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "./features/coinsSlice";
import Spinner from "./components/Spinner";
function App() {
  const dispatch = useDispatch();

  const [showMore, setShowMore] = React.useState(false);
  const status = useSelector((state) => state.reducer.status);
  const coins = useSelector((state) => state.reducer.coins);
  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <button onClick={() => dispatch(getCoins())}>Get Coins</button>
      <ul>
        {status === "loading" && <Spinner />}
        {status === "error" && <li>Error!</li>}
        {status === "success" &&
          coins.map((coin) => (
            <div>
              <img src={coin.icon} style={{ width: "40px" }} alt="" />
              <li key={coin.id}>
                name :{coin.name} price: {coin.price.toFixed(3)}
              </li>
              <button onClick={() => handleClick(coin.id)}>
                {showMore ? "showLess" : "showMore"}
              </button>
            </div>
          ))}
      </ul>
    </>
  );
}

export default App;
