import React, { useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useFormik } from "formik";
import * as yup from "yup";

import profile from "../assets/profile.png";
import { ActionButton } from "./ActionButton";
import { FormContainer } from "./FormContainer";
import convertToBase64 from "../helpers/convert";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  username: yup
    .string("Enter your username")
    .required("Username is required")
    .min(5, "Username should be of minimum 5 characters long"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Register(props) {
  const [file, setFile] = useState();
  const [fileError, setFileError] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
      toast.success("Login Successfully");
    },
  });
  const onUpload = async (e) => {
    const allowedExtensions = /(\jpg|\jpeg|\png)$/i;
    if (!allowedExtensions.exec(e.target.files[0].type)) {
      setFileError("Upload only JPEG/JPG/PNG images");
      setFile("");
      return;
    }
    console.log("Hi");
    const base64 = await convertToBase64(e.target.files[0]);
    setFileError("");
    setFile(base64);
  };
  return (
    <>
      <Toaster position="bottom-right" />
      <FormContainer elevation={3}>
        <Typography variant="h4" mb={1}>
          Register
        </Typography>
        <Typography sx={{ color: "text.secondary" }} variant="p">
          Happy to Join You 🥰
        </Typography>
        <Box my={4}>
          <label htmlFor="profileImage">
            <img
              style={{
                width: "100px",
                height: "100px",
                boxShadow: "#5E5DF0 5px 10px 20px -10px",
                borderRadius: "50%",
                padding: "5px",
                objectFit: "cover",
              }}
              width={100}
              src={file || profile}
              alt="profile"
            />

            <EditIcon
              sx={{
                fontSize: 22,
                backgroundColor: "#fff",
                padding: "4px",
                borderRadius: "5px",
                position: "relative",
                bottom: 12,
                right: 32,
              }}
            />
          </label>
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            style={{ display: "none" }}
            onChange={onUpload}
          />
          <Typography sx={{ color: "error.main", fontSize: 14 }}>
            {fileError && fileError}
          </Typography>
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
                id="username"
                name="username"
                label="Username"
                variant="filled"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
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
                Already Registered ?<Link to={"/login"}> Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </>
  );
}

export default Register;
