import { styled, Paper } from "@mui/material";

export const FormContainer = styled(Paper)(({ theme }) => ({
  backdropFilter: "blue(5px)",
  background: "rgba(255, 255, 255, 0.5)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border: "7px solid rgba(255, 255, 255, 0.5)",
  padding: "3rem 2rem",
  textAlign: "center",
  width: "75%",
  [theme.breakpoints.up("sm")]: {
    width: "50%",
  },
  [theme.breakpoints.up("md")]: {
    width: "33%",
  },
}));
