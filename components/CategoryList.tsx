import Books from "../database/books.json";
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import Book from "../models/interfaces";

const CategoryList: React.FC = () => {
  const [bookFromCategory, setBookFromCategory] = useState<Book>();
  const [totalCategories, setTotalCategories] = useState([]);
  const [categoryListing, setCategoryListing] = useState([]);
  //υπολογισμος των βιβλιων ανα κατηγορια
  useEffect(() => {
    let Arr: string[] = [];
    Books.map((book) => {
      Arr = Arr.concat(book.categories);
    });
    setTotalCategories(Arr);
    function removeDuplicates(arr): string[] {
      return [...new Set<string>(arr)];
    }

    setCategoryListing(removeDuplicates(Arr));
  }, []);
console.log(categoryListing)
  //concat all book.categories[] and then remove dublicates

  //render books of the chosen category
  const onClickRender = (category: string) => {
    let filteredBooks: Book[] = [];
    // let filteredBooks:Array<Book>=[];
    if (!category) {
      //books χωρις category
      filteredBooks = Books.filter((book) => book.categories.length === 0);
    } else {
      //books με category
      filteredBooks = Books.filter((book) =>
        book.categories.includes(category)
      );
    }
    setBookFromCategory(filteredBooks);
  };
// console.log(bookFromCategory)
  return (

    <div style={{ textAlign: "center" }}>
      <Typography variant="h5" component="h2" style={{ color: "aqua" }}>
        Choose a category of books
      </Typography>

      {categoryListing?.map((category, index) => (
        <>
          <Button
            key={index}
            variant="contained"
            color="info"
            size="small"
            sx={{ p: 2 }}
            onClick={() => onClickRender(category)}
          >
            {category ? category : "UNCATEGORISED "}
            {" ("}
            {
              totalCategories?.filter((cat) => {
                return category === cat;
              }).length
            }
            {")"}
          </Button>
        </>
      ))}

      {bookFromCategory && (
        <>
          {/* table με τα βιβλια που επιλεχθηκαν */}
          <Typography variant="h5" component="h2" style={{ color: "aqua" }}>
            Books of the chosen category
          </Typography>

          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 800 }}>
              <Table stickyHeader aria-label="sticky table" id="myTable">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Title</b>
                    </TableCell>
                    <TableCell>
                      <b>Authors</b>
                    </TableCell>
                    <TableCell>
                      <b>Description</b>
                    </TableCell>
                    <TableCell>
                      <b>Pages</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookFromCategory?.map((book, index) => {
                    return (
                      <React.Fragment key={index}>
                        <TableRow tabIndex={-1}>
                          <TableCell>{book.title} </TableCell>
                          <TableCell>{book.authors}</TableCell>
                          <TableCell>{book.shortDescription}</TableCell>
                          <TableCell>{book.pageCount}</TableCell>
                        </TableRow>
                      </React.Fragment>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </>
      )}
    </div>
  );
};
export default CategoryList;
