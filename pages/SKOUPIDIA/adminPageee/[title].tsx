import Books from "../../database/books.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Book } from "../../models/interfaces";

export default function ChosenBook() {
  const [book, setBook] = useState();
  const [bookDate,setBookDate]=useState();
  const router = useRouter();
  useEffect(() => {
    Books.filter((book:Book) => {
      if (book.title === router.query.title) {
        setBook(book);
        const bookDate:String= book.publishedDate.$date.slice(0,10)
        setBookDate(bookDate)
        
      }
    });
  }, [router]);

  
  return ( 
  <>
 
  <TableContainer >
    <Table stickyHeader aria-label="sticky table" id="myTable">
      <TableHead >
              <TableRow >
                <TableCell>
                  <b >Title</b>
                </TableCell>
                <TableCell>
                  <b >Authors</b>
                </TableCell>
                <TableCell  style={{textAlign: "center"}}>
                  <b >Description</b>
                </TableCell>
                <TableCell>
                  <b>Categories</b>
                </TableCell>
                <TableCell>
                  <b >Pages</b>
                </TableCell>
                <TableCell>
                  <b >publishedDate</b>
                </TableCell>
                <TableCell>
                  <b >isbn</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>            
                    <TableRow tabIndex={-1}>
                      <TableCell style={{color: "white"}}>{book?.title}</TableCell>
                      <TableCell style={{color: "white"}}>{book?.authors}</TableCell>
                      <TableCell style={{color: "white"}}>({book?.shortDescription})?{book?.shortDescription}:{book?.longDescription}</TableCell>
                      <TableCell style={{color: "white"}}>{book?.categories}</TableCell>
                      <TableCell style={{color: "white"}}>{book?.pageCount}</TableCell>
                      <TableCell style={{color: "white"}}>{bookDate}</TableCell>
                      <TableCell style={{color: "white"}}>{book?.isbn}</TableCell>
                    </TableRow>
            </TableBody>
            </Table>
            </TableContainer>
   </>
  
  )
}

