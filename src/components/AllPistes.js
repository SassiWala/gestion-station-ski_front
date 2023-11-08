import axios from "axios";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Delete, Visibility } from "@mui/icons-material";
import ShowPiste from "./ShowPiste";
import { CircularProgress, Typography } from "@mui/material";

const columns = [
  {
    id: "piste",
    label: "Piste",
    minWidth: 100,
    align: "right",
    format: (value) => value,
  },
  {
    id: "color",
    label: "Color",
    minWidth: 100,
    align: "right",
    format: (value) => value,
  },
  {
    id: "length",
    label: "Length",
    minWidth: 100,
    align: "right",
    format: (value) => value,
  },
  {
    id: "slope",
    label: "Slope",
    minWidth: 100,
    align: "right",
    format: (value) => value,
  },
  {
    id: "nbLengthSkier",
    label: "N° Skier",
    minWidth: 100,
    align: "right",
    format: (value) => value,
  },
  {
    id: "show/update/delete",
    label: " ",
    minWidth: 100,
  },
];

function createData(id, piste, color, length, slope, nbSkier) {
  const nbLengthSkier = nbSkier.length;
  return { id, piste, color, length, slope, nbLengthSkier };
}

export default function AllPistes({ refresh }) {
  const [err, setErr] = useState();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [deleted, setDeleted] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getPistes();
  }, [loading, refresh, deleted]);
  const handleDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/delete/${id}`);
    setDeleted(!deleted);
  };
  const getPistes = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/all`)
      .then(({ data }) => {
        setLoading(false);
        setRows((prevrow) =>
          data.map((piste) =>
            createData(
              piste.numPiste,
              piste.namePiste,
              piste.color,
              piste.length,
              piste.slope,
              piste.skiers
            )
          )
        );
      })

      .catch((error) => {
        setLoading(false);
        setErr(error.message);
      });
  };
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : err ? (
        <Typography>Something happened</Typography>
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
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
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        key={row.piste}
                        tabIndex={-1}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <>
                              <TableCell key={column.id} align={column.align}>
                                {!column.format ? (
                                  <>
                                    <Visibility
                                      color="success"
                                      onClick={handleClickOpen}
                                    />
                                    <ShowPiste
                                      row={row}
                                      handleClose={handleClose}
                                      open={open}
                                    />

                                    <Delete
                                      color="error"
                                      onClick={() => handleDelete(row.id)}
                                    />
                                  </>
                                ) : column.format &&
                                  typeof value === "number" ? (
                                  column.format(value)
                                ) : (
                                  value
                                )}
                              </TableCell>
                            </>
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
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
