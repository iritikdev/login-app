import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h4: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontWeight: "800",
    },
  },
  palette: {
    primary: {
      main: "#5c5cd6",
      dark: "#7070db",
    },
  },
});
