import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import CoinsList from "./features/CoinsList";
import StickyHeadTable from "./components/Tables";
function App() {
  const status = useSelector((state) => state.reducer.status);
  const coins = useSelector((state) => state.reducer.coins);

  return (
    <>
      {/*<CoinsList />*/}
      <StickyHeadTable />
    </>
  );
}

export default App;
