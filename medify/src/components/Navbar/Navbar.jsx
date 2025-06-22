import { Box,Button,Container,Stack,Typography,IconButton,useMediaQuery } from "@mui/material";
import logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import styled from "./Navbar.module.css";
import NavbarMenuIcon from "@mui/icons-material/Menu";
import ClosedIcon from "@mui/icons-material/Close"
import { useState } from "react";
export default function Navbar(){
    const mobile=useMediaQuery("(max-width:900px)");
    const[menuOpen,setMenuOpen] = useState(false);
    return(
        <header sx={{fontSize:"40px"}}>
            <Box p={2} bgcolor="primary.main">
                 {/* Top Announcement Bar */}
                <Typography fontSize={14} textAlign="center" color="#fff">  The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.</Typography>
            </Box>
             {/* Main Navigation */}
            <Container maxWidth="xl">
                <Stack 
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="space-between"
                py={2}>
                {/* Logo */}
                    <Link to="/">
                        <img src={logo} alt="logo" height={25}/>
                    </Link>
                    {/* Hamburger Icon */}
                    {mobile && !menuOpen && (
                        
                        <IconButton onClick={()=>setMenuOpen(true)}>
                        <NavbarMenuIcon sx={{color:"black"}}/>
                        </IconButton>
                    )}
                    <Stack
                    spacing={4}
                    alignItems={{xs:"flex-start",md:"center"}}
                    direction={{xs:"column",md:"row"}}
                    pt={{xs:12,md:1}}
                    pb={{xs:4,md:1}}
                    px={{xs:4,md:0}}
                    sx={{
                    bgcolor:{
                        xs:"blue",
                       md:"transparent"
                    }
                    }}
                     className={`${styled.navlink} ${menuOpen ? styled.active : ""}`}>
                         {mobile && (
                          <IconButton
                          onClick={() => setMenuOpen(false)}
                            sx={{ alignSelf: "flex-end", mt: -2,top:0,right:32,position:"absolute",color:"#fff" }}
                          >
                         <ClosedIcon />
                         </IconButton>
                         )}
                          <Link to="#">Find Doctors</Link>
                          <Link to="/search" >Hospitals</Link>
                          <Link to="#">Medicines</Link>
                          <Link to="#">Surgeries</Link>
                          <Link to="#"  >Software for Provider</Link>
                          <Link to="#" >Facilities</Link>
                          <Link to="/my-bookings">
                            <Button variant="contained">My Bookings</Button>
                          </Link>
                           {/* Close Icon on Mobile */}
                        
                          </Stack>
                </Stack>
            </Container>
        </header>
    )
}