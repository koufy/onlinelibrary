import Books from "../../database/books.json";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Box,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import Book from "../../models/interfaces";

export default function ChosenBook() {
  const [chosenBook, setChosenBook] = useState<Book>();
  const [bookDate, setBookDate] = useState();
  const router = useRouter();
  useEffect(() => {
      //  console.log(router.query)
    Books.map((book) => {
      if (book.title === router.query.book) {
        setChosenBook(book);
        const date: String = book.publishedDate.$date.slice(0, 10);
        setBookDate(date);
      }
    });
  }, [router]);
  console.log(chosenBook);
  return (
    <>
    <div style={{justifyContent:"center",display:"flex",margin:"100px"}}>
    
     
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "30ch" },
          backgroundColor: "white",
          width: "300px",
          textAlign: "center",
          display: "block",
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          style={{ textAlign: "center" }}
          item
          component="form"
          sx={{ width: 250 }}
          noValidate
          autoComplete="off"
        >
          <TextField
            // sx={{display:"flex",justifyContent:"center"}}
            id="outlined-read-only-input"
            label="Title"
            value={chosenBook?.title}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            // sx={{display:"flex",justifyContent:"center"}}
            id="outlined-read-only-input"
            label="Category"
            value={chosenBook?.categories}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            // sx={{display:"flex",justifyContent:"center"}}
            id="outlined-read-only-input"
            label="Pages"
            value={chosenBook?.pageCount}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            // sx={{display:"flex",justifyContent:"center"}}
            id="outlined-read-only-input"
            label="published"
            value={bookDate}
            InputProps={{
              readOnly: true,
            }}
          />
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder={
              chosenBook?.shortDescription
                ? chosenBook?.shortDescription
                : chosenBook?.longDescription
            }
            style={{ width: 200, backgroundColor: "white" }}
          />
        </Grid>
      </Box>
      </div>
    </>
  );
}
