import React from "react";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";

import { ActionButton } from "./ActionButton";

const validationSchema = yup.object({
  password: yup
    .string("Enter your password")
    .min(6, "OTP should be length of 6 characters.")
    .max(6, "OTP should be length of 6 characters.")
    .required("Password is required"),
});

function Recovery(props) {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
          Recovery
        </Typography>
        {/* <Typography sx={{ color: "text.secondary" }} variant="p">
          Enter OTP to recover password
        </Typography> */}
        <Box my={4}>
          <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
            Enter 6 digit OTP send to your email
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid my={4} container gap={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="OTP"
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
                Let's Go
              </ActionButton>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="p"
                sx={{ color: "text.secondary", fontSize: 16 }}
              >
                Can't get OTP? <Link>Resend</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

export default Recovery;
