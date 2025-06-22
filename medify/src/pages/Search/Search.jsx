import {
  Box,
  Container,
  Stack,
  Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import SearchHospital from "../../components/SearchHospitals/SearchHospitals";
import HospitalCard from "../../components/HospitalSearchCard/Card";
import BookingCard from "../../components/BookingCard/Booking";
import AutoMessage from "../../components/AlertMessage/Message";
import VerifiedIcon from "../../assets/verified.1f87346e730e 1.png";
import add from "../../assets/Group 1000011079.png";

export default function Search(){
  const [searchParams] = useSearchParams();
  const [state, setState] = useState(searchParams.get("state"));
  const [cities, setCities] = useState(searchParams.get("city"));
  const [hospital, setHospital] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState({});
  const [showToast, setShowToast] = useState(false);

  const availableSlot = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  useEffect(() => {
    const selectedState = searchParams.get("state");
    const selectedCity = searchParams.get("city");

    setState(selectedState);
    setCities(selectedCity);

    if (selectedState && selectedCity) {
      fetchHospitalAvailableData(selectedState, selectedCity);
    }
  }, [searchParams]);

  const fetchHospitalAvailableData = async (state, city) => {
    setIsLoading(true);
    setHospital([]);
    try {
      const res= await axios.get(
        `https://meddata-backend.onrender.com/data?state=${state}&city=${city}`
      );
      setHospital(res.data);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openBooking = (details) => {
    setSelectedBooking(details);
    setModalVisible(true);
  };

  return (
    <>
      <NavBar />

      <Box sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))" }}>
        {/* Search Section */}
        <Box
          sx={{
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            pb: 8
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              backgroundColor: "#fff",
              p: 3,
              borderRadius: 2,
              mt: 4,
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <SearchHospital />
          </Container>
        </Box>

        {/* Result Section */}
        <Container maxWidth="xl" sx={{ pt: 10, pb: 10 }}>
          {hospital.length > 0 && (
            <Box mb={3}>
              <Typography variant="h5" fontWeight={500} gutterBottom>
                {hospital.length} medical centers available in{" "}
                <span style={{ textTransform: "capitalize" }}>{cities?.toLowerCase()}</span>
              </Typography>

              <Stack direction="row" spacing={2}>
                <Box component="img" src={VerifiedIcon} alt="Verified Icon" height={24} />
                <Typography color="text.secondary">
                  Book appointments with minimal wait times and verified doctor details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack direction={{ md: "row" }} spacing={4} alignItems="flex-start">
            {/* Hospital Cards */}
            <Stack
              spacing={3}
              width={{ xs: "100%", md: "calc(100% - 384px)" }}
            >
              {hospital.map((entry) => (
                <HospitalCard
                  key={entry["Hospital Name"]}
                  details={entry}
                  availableSlots={availableSlot}
                  handleBooking={openBooking}
                />
              ))}

              {isloading && (
                <Typography variant="h6" bgcolor="#fff" p={3} borderRadius={2}>
                  Loading...
                </Typography>
              )}

              {!state && !cities && (
                <Typography variant="h6" bgcolor="#fff" p={3} borderRadius={2}>
                  Please select a state and city
                </Typography>
              )}
            </Stack>

            {/* Banner Image */}
            <Box component="img" src={add} alt="Call to Action" width={360} />
          </Stack>
        </Container>

        {/* Modal & Snackbar */}
        <BookingCard
          open={modalVisible}
          setOpen={setModalVisible}
          bookingDetails={selectedBooking}
          showSuccessMessage={setShowToast}
        />

        <AutoMessage
          open={showToast}
          setOpen={setShowToast}
        />
      </Box>
    </>
  );
};

