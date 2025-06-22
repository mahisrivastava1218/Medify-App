import { useEffect, useState } from "react";
import { Box, Typography, Container, Stack } from "@mui/material";

import NavBar from "../../components/Navbar/Navbar";
import SearchByHospitals from "../../components/SearchHospitals/SearchByHospitals";
import HospitalCard from "../../components/HospitalSearchCard/Card";
import addImage from "../../assets/Group 1000011079.png";

export default function MyBookings() {
  const [allBookings, setAllBookings] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  // Fetch bookings from local storage when the component mounts
  useEffect(() => {
    const storedBookings = localStorage.getItem("bookings") || "[]";
    setAllBookings(JSON.parse(storedBookings));
  }, []);

  // Set the filtered bookings list whenever the original list updates
  useEffect(() => {
    setFilteredList(allBookings);
  }, [allBookings]);

  return (
    <>
      <NavBar />

      {/* Background wrapper with top gradient */}
      <Box sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}>
        {/* Top header with title and search box */}
        <Box
          mb="70px"
          pt={{ xs: 2, md: 2 }}
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 0, md: 4 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 0, md: 10 }}
              alignItems={{ xs: "center", md: "flex-end" }}
            >
              <Typography
                component="h1"
                fontSize={{ xs: 32, md: 40 }}
                fontWeight={700}
                color="#fff"
                pb={1}
                textAlign="center"
              >
                My Bookings
              </Typography>

              {/* Search Filter Component */}
              <Box
                bgcolor="#fff"
                p={3}
                borderRadius={2}
                boxShadow="0 0 10px rgba(0,0,0,0.1)"
                sx={{ translate: "0 40px" }}
                width={{ xs: 1, md: "60%" }}
              >
                <SearchByHospitals
                  list={allBookings}
                  filterList={setFilteredList}
                />
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Bookings Display Section */}
        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          <Stack direction={{ md: "row" }} alignItems="flex-start">
            <Stack
              spacing={2}
              mb={{ xs: 4, md: 0 }}
              width={{ xs: 1, md: "calc(100% - 384px)" }}
              mr="24px"
            >
              {/* Show booked hospitals if available */}
              {filteredList.length > 0 &&
                filteredList.map((booking) => (
                  <HospitalCard
                    key={booking["Hospital Name"]}
                    details={booking}
                    booking={true}
                  />
                ))}

              {/* Show fallback message if no bookings found */}
              {filteredList.length === 0 && (
                <Typography variant="h3" bgcolor="#fff" p={3} borderRadius={2}>
                  No Bookings Found!
                </Typography>
              )}
            </Stack>

            {/* Right-side image */}
            <img src={addImage} width={360} height="auto" alt="Decoration" />
          </Stack>
        </Container>
      </Box>
    </>
  );
}
