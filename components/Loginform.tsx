import React, { useState } from "react";
import { Paper, Grid, TextField, Button } from "@mui/material";
import admins from "../database/admins";
import users from "../database/users";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { Admins, Users, Details } from "../models/interfaces";

//login for an admin / user / or reject
export default function LoginForm() {
  const [details, setDetails] = useState<Details>({ name: "", password: "" });
  const router = useRouter();
  let [isLoggedIn, setIsLoggedIn] = useState<number>(0);

  const Login = async () => {
    const administrator: Admins = await admins.filter(
      (admin) => admin.name === details.name
    )[0];
    const user: Users = await users.filter(
      (user) => user.name === details.name
    )[0];

    if (
      administrator?.name === details.name &&
      administrator.password === details.password
    ) {
      setIsLoggedIn(3);
      router.push("/adminPage/");
      // console.log("admin logged in");
    } else if (
      user?.name === details.name &&
      user.password === details.password
    ) {
      setIsLoggedIn(++isLoggedIn);
      // console.log("user logged in");
      setDetails({ name: "", password: "" });
    } else {
      // console.log("details dont match");
      setDetails({ name: "", password: "" });
      setIsLoggedIn(-1);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    Login();
  };

  const logOut = () => {
    setIsLoggedIn(0);
  };

  return (
    
    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
     
      <Grid
        style={{ textAlign: "center" }}
        item
        component="form"
        sx={{ width: 250 }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="form-inner">
          <Paper elevation={10} style={{ marginBottom: "20px" }}>
            <h2>SIGN IN</h2>
            {/* {error !== "" ? <div className="error">{error}</div> : ""} */}
            <div>
              <TextField
                style={{ margin: "5px" }}
                label="name"
                id="outlined-size-small"
                size="small"
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
                value={details.name}
              />
            </div>
            <div className="form-group">
              <TextField
                style={{ margin: "5px" }}
                id="outlined-password-input"
                label="Password"
                type="password"
                size="small"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
              />
            </div>

            {isLoggedIn == 0  && (
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="medium"
                sx={{ p: 2 }}
                style={{ margin: "12px" }}
              >
                Login
              </Button>
            )}
            {isLoggedIn == 1 && (
              <Button
                type="button"
                variant="contained"
                color="success"
                size="medium"
                sx={{ p: 2 }}
                style={{ margin: "12px" }}
                onClick={logOut}
              >
                Logout
              </Button>
            )}

            {isLoggedIn === -1 && 
            <>
            <Button
                type="submit"
                variant="contained"
                color="success"
                size="medium"
                sx={{ p: 2 }}
                style={{ margin: "12px" }}
                >
                Login
              </Button><p>Details do not match</p> 
                </>
              }
          </Paper>
        </div>
      </Grid>
     
    </Box>
  );
}
