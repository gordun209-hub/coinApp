import React, { useEffect } from "react";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getCoins } from "../coinsSlice";
import CoinList from "../.././components/CoinList";

const CoinsDisplay = () => {
  const status = useSelector((state) => state.reducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoins());
  }, [dispatch]);

  return <div>{status === "loading" ? <Spinner /> : <CoinList />}</div>;
};
export default CoinsDisplay;
