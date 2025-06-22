import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
       {/* {/* <CssBaseline /> */}
      <Outlet/>
      <Footer />  
      <div>Hello</div>
    </>
  );
};

export default App;
