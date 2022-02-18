import React from "react";

const CoinsList = ({ coins, onCoinClick }) => {
  return (
    <div className="coins-list">
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="coin"
          onClick={() => onCoinClick(coin.id)}
        >
          <img src={coin.imageUrl} alt={coin.name} />
          <div className="coin-name">{coin.name}</div>
        </div>
      ))}
    </div>
  );
};
export default CoinsList;
