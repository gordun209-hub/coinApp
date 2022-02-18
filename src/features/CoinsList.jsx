import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "./coinsSlice";
import { Button } from "@mui/material";
const CoinsList = () => {
  const coins = useSelector((state) => state.reducer.coins);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.reducer.status);
  return (
    <div className="coins-list">
      <Button
        variant="contained"
        onClick={() => dispatch(getCoins())}
        color="success"
      >
        Get coins
      </Button>
      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {coins.map((coin) => (
            <div key={coin.id}>
              <img src={coin.icon} style={{ width: "35px" }} alt={coin.name} />
              <li key={coin.id}>
                {coin.name} {coin.price}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
export default CoinsList;
