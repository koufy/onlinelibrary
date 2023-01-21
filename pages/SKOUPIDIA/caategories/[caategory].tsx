import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Books from "../../database/books.json";
import Book from "../../models/interfaces";


export default function ChosenBook() {
  const router = useRouter();
  const [chosenBooks, setChosenBooks] = useState<any[]>([]);
// console.log(router)
  // const [bookDate,setBookDate]=useState();

  useEffect(() => {
    let chosenBook=[]
    chosenBook = Books.filter((book) =>
    book.categories.includes(router.query?.category)
    // const bookDate: String = book?.publishedDate?.$date.slice(0, 10);
    // setBookDate(bookDate);
    );
    setChosenBooks(chosenBook)

  }, [router]);
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
  const toBookRedirect: GridEventListener<"rowClick"> = (e) => {
    console.log(e)
   
    router.push({
      pathname: `/[caategory]/[tiitle]`,
      query: { caategory:e.row.category,tiitle: e.row.title },
    });
  };

  return (
    <>
    <p>asdasd</p>
   <DataGrid
   getRowId={(row: any) => generateRandom()}
        style={{ backgroundColor: "white" }}
        sx={{ height: 440, width: "100%" }}
        rows={chosenBooks}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onCellClick={toBookRedirect}
        {...Books}
      />









    </>
  )
}
