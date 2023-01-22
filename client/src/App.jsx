import { createBrowserRouter, RouterProvider } from "react-router-dom";

import UserName from "./components/UserName";
import Password from "./components/Password";
import Reset from "./components/Reset";
import Profile from "./components/Profile";
import PageNotFound from "./components/PageNotFound";
import Recovery from "./components/Recovery";
import Register from "./components/Register";
import { Box } from "@mui/material";

import background from "../src/assets/background.png";
// root routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <UserName />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password",
    element: <Password />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <Box
      flexGrow={1}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${background})`,
      }}
    >
      <RouterProvider router={router}></RouterProvider>
    </Box>
  );
}

export default App;
