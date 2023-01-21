import Books from "../../database/books.json";

import * as React from "react";
import { useRouter } from "next/router";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Book from "../../models/interfaces";
import Mesasodas from "../categories";

const BookCategories = () => {
  const router = useRouter();

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", minWidth: 150, flex: 1 },
    {
      field: "authors",
      headerName: "Authors",
      width: 150,
      editable: false,
      minWidth: 150,
      flex: 1,
    },
    {
      field: "shortDescription",
      headerName: "Description",
      width: 200,
      editable: false,
      minWidth: 150,
      flex: 2,
    },
    {
      field: "pageCount",
      headerName: "Pages",
      type: "number",
      width: 100,
      editable: false,
      minWidth: 150,
      flex: 0.5,
    },
  ];

  Books.forEach((book, i = 0) => {
    book.id = i + 1;
  });

  const toBookRedirect: GridEventListener<"rowClick"> = (e) => {
    router.push({
      pathname: "/AllBooks/[book]",
      query: { book: e.row.title },
    });
  };

  return (
    <>
      {/* <Typography
        variant="h3"
        component="h4"
        style={{ color: "aqua", textAlign: "center" }}
      >
        List of all books
      </Typography>
      <Typography variant="h5" component="h2" style={{ color: "aqua" }}>
        click on any title to see details
      </Typography>

      <DataGrid
        style={{ backgroundColor: "white" }}
        sx={{ height: 440, width: "100%" }}
        rows={Books}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onCellClick={toBookRedirect}
        {...Books}
      /> */}
      <Mesasodas/>
    </>
  );
};

export default BookCategories;
