import Books from "../database/books.json";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import Book from "../models/interfaces";
import { useRouter } from "next/router";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import BooksAndQuantity from "../models/interfaces";
import { textAlign } from "@mui/system";

const ListOfCategories = () => {
  // const [bookFromCategory, setBookFromCategory] = useState<BooksAndQuantity[]>([]);
  const [booksAndQuantity, setBooksAndQuantity] = useState<BooksAndQuantity[]>([]);
  const [totalCategories, setTotalCategories] = useState<any>([]);
  const [categoryListing, setCategoryListing] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    let Arr: string[] = [];
    Books.map((book) => {
      Arr = Arr.concat(book.categories);
    });
    setTotalCategories(Arr);

    const categoriesWithNoquantity: any = [];
    const arrayWithUniqueCategories=removeDuplicates(Arr)

    setCategoryListing(arrayWithUniqueCategories);

    arrayWithUniqueCategories?.map((category: string) => {
      let numOfbooks = Arr?.filter((cat) => {
        return category === cat;
      }).length;
      //add quantity per category
      categoriesWithNoquantity.push({
        category: category,
        numberOfbooks: numOfbooks,
      });
    });
    
    setBooksAndQuantity(categoriesWithNoquantity);
  }, []);

  const columns: GridColDef[] = [
    {
      field: "category",
      headerName: "Book Categories",
      minWidth: 150,
      flex: 1,
      align:"left",
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
    },
    {
      field: "numberOfbooks",
      headerName: "Books in this category",
      width: 150,
      editable: false,
      minWidth: 150,
      flex: 1,
      align:"right",
      headerAlign: 'center',
      headerClassName: 'super-app-theme--header',
    },
  ];

  function removeDuplicates(arr): string[] {
    return [...new Set<string>(arr)];
  }

  function generateRandom() {
    var length = 8,
      charset =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  const toCategoryRedirect: GridEventListener<"rowClick"> = (e) => {
   console.log("lathos arxeio trexei")
      router.push({
        pathname: "/[category]",
        query: { category: e.row.category },
      });
   
  };
  return (
    <>
      <Typography
        variant="h4" component="h5" style={{ color: "aqua", textAlign: "center" }}>
        List of all categories
      </Typography>

      <Typography variant="h6" component="h2" style={{ color: "aqua" }}>
        click on any category to see books
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <DataGrid
       sx={{
         HorizontalAlign: "Center",
        headerAlign:"center",
        height: 400, width: "100%" ,
         boxShadow: 2,
        border: 2,
        borderColor: 'primary.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'primary.main',
        },
      }}
        getRowId={(row: any) => generateRandom()}
        style={{ backgroundColor: "white" }}
        rows={booksAndQuantity}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
       
          onRowClick={toCategoryRedirect}
              
      />
      </Box>
    </>
  );
};

export default ListOfCategories;
