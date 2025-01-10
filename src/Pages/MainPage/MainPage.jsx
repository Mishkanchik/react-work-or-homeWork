import { Outlet } from "react-router";
import HeaderComponent from "../../Components/HeadersComponent/headers";
import { Box } from "@mui/material";

const MainPage = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
            <Box sx={{ backgroundColor: "#121212", color: "#fff", p: 3, width: "100vw", minHeight: "100vh" }}></Box>
        </>
    );
};

export default MainPage;
