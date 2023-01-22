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
  firstName: yup
    .string("Enter your first Name")
    .min(3, "Your name atleast 3 characters long")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last Name")
    .min(3, "Your last name atleast 3 characters long")
    .required("Last name is required"),
  mobile: yup
    .string("Enter your mobile number")
    .min(10, "Your mobile number atleast 10 characters long")
    .required("Mobile number is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  address: yup.string("Enter your Address"),
});

function Profile(props) {
  const [file, setFile] = useState();
  const [fileError, setFileError] = useState();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values = Object.assign(values, { profile: file || "" });
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
          <Grid my={4} container rowGap={3} justifyContent="space-between">
            <Grid item sm={5.8} xs="12">
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                variant="filled"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item sm={5.8} xs="12">
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                variant="filled"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item sm={5.8} xs="12">
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile No"
                variant="filled"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
              />
            </Grid>
            <Grid item sm={5.8} xs="12">
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
                id="address"
                name="address"
                label="Address"
                variant="filled"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Grid>

            <Grid item xs={12}>
              <ActionButton
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Update
              </ActionButton>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="p"
                sx={{ color: "text.secondary", fontSize: 16 }}
              >
                Come back later ?<Link to={"/"}> Logout</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </FormContainer>
    </>
  );
}

export default Profile;
