import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { getCoins } from "../features/coinsSlice";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },

  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
  },
  {
    id: "rank",
    label: "rank",
    minWidth: 170,
    align: "right",
  },
  {
    id: "icon",
    label: "icon",
    minWidth: 170,
    align: "right",
  },
];

export default function StickyHeadTable() {
  const coins = useSelector((state) => state.reducer.coins);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // create coin data
  const dispatch = useDispatch();
  const coinData = coins.map((coin) => {
    return {
      name: coin.name,
      rank: coin.rank,
      price: coin.price.toFixed(6),
      icon: <img src={coin.icon} />,
    };
  });
  const [filterCoins, setFilterCoins] = React.useState("");
  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(filterCoins.toLowerCase());
  });
  return (
    <>
      <label>Filter coins </label>
      <input
        value={filterCoins}
        onChange={(e) => setFilterCoins(e.target.value)}
      />
      <button
        variant="contained"
        onClick={() => dispatch(getCoins())}
        color="success"
      >
        refresh coins
      </button>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 740 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCoins
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={filteredCoins.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
