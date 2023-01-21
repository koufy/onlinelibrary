import { useEffect, useState } from "react";
import listOfBooks from "../database/books.json";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import  Book from "../models/interfaces";



const RandomBook = () => {
  const [randomBook, setRandomBook] = useState("");

  useEffect(() => {
    let len:number = listOfBooks.length;
    (async () => {
      const randomBook:Book = await listOfBooks[Math.floor(Math.random() * len)];

      setRandomBook(randomBook);

      return randomBook;
    })();
  }, []);

  return (<>
    <Paper sx={{ justifyContent:"fit-content", overflow: "hidden",display:"flex" }}>
    <TableContainer sx={{ maxHeight: 440 }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell><b>Title</b></TableCell>
            <TableCell><b>Authors</b></TableCell>
            <TableCell><b>Description</b></TableCell>
            <TableCell><b>Pages</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              <TableRow >
                <TableCell>{randomBook.title}</TableCell>
                <TableCell>{randomBook.authors}</TableCell>
                <TableCell>{randomBook.shortDescription}</TableCell>
                <TableCell>{randomBook.pageCount}</TableCell>
              </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
  </>
  );
};
export default RandomBook;


