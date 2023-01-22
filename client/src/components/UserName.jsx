import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";

import profile from "../assets/profile.png";
import background from "../assets/Background.png";
import { ActionButton } from "./ActionButton";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function UserName(props) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      toast.success("Login Successfully");
    },
  });
  return (
    <>
      <Toaster position="bottom-right" />
      <Paper
        elevation={3}
        sx={{
          backdropFilter: "blue(5px)",
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "7px solid rgba(255, 255, 255, 0.3)",
          padding: "5rem 2rem",
          textAlign: "center",
          width: { md: "25%", xs: "80%" },
        }}
      >
        <Typography variant="h4" mb={1}>
          Hello Again!
        </Typography>
        <Typography sx={{ color: "text.secondary" }} variant="p">
          Explore More by Connecting with us
        </Typography>
        <Box my={4}>
          <img
            style={{
              boxShadow: "0px 2px 4px #f2f2f2",
              borderRadius: "50%",
              padding: "3px",
            }}
            width={100}
            src={profile}
            alt="profile"
          />
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid my={4} container gap={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="filled"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                variant="filled"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <ActionButton
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </ActionButton>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="p"
                sx={{ color: "text.secondary", fontSize: 16 }}
              >
                Not a member?
                <Link to={"/register"}> Register</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

export default UserName;
