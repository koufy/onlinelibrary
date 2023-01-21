import { Button ,Box } from "@mui/material";
import BookCategories from "../../components/BookCategories";
import { useState } from "react";
import { useRouter } from "next/router";
import Welcome from "../../components/Welcome";



export default function MainPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(1);
  const router = useRouter()

  const handleLogOut=()=>{
    setIsLoggedIn(0);
    router.push('/')
  }
  return (
    <>
    
      <Welcome/>
      
      <Box textAlign='center'>
      <Button
      
      type="submit"
      variant="contained"
      color="success"
      value="Logout"
      size="medium"
      sx={{ p: 2 }}
      onClick={handleLogOut}
      >
        Logout
      </Button>
          </Box>
          <BookCategories/>
    </>
  );
}
