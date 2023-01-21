import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function Buttons(){
const router=useRouter();
const goToAllBooks = () =>{
    router.push("/AllBooks/");
}
const goToAllCategories = () =>{
    router.push("/categories/");
}


    return(
        <div style={{justifyContent:"center",display:"flex"}}>
        <Button  type="button"
        variant="contained"
        color="success"
        size="small"
        sx={{ p: 4 , height:"50px"}}
        style={{ margin: "12px" }}
        onClick={goToAllBooks}>
          All books
        </Button>
         <Button 
         type="button"
         variant="contained"
         color="success"
         size="small"
         sx={{ p: 4 , height:"50px"}}
         style={{ margin: "12px" }}
         onClick={goToAllCategories}>
            all categories
            </Button>
         </div>
        )
}

