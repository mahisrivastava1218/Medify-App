import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { format } from "date-fns";

export default function BookingCard({
  open,
  setOpen,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");

  // Function to handle booking submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the analytics event function
    logVisitEvent();

    // Fetch existing bookings from localStorage
    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    // Add new booking with user email
    const updatedBookings = [
      ...existingBookings,
      { ...bookingDetails, bookingEmail: email },
    ];

    // Save back to localStorage
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    // Show success feedback and reset
    showSuccessMessage(true);
    setEmail("");
    setOpen(false);
  };

  // Logs a custom analytics event using the dataLayer
  const logVisitEvent = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "first_visit",
      eventDate: new Date().toISOString(),
    });
  };

  // Utility to format date nicely
  const formatBookingDate = (dateString) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return format(date, "E, d LLL");
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#fff",
          boxShadow: 24,
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          outline: "none",
        }}
      >
        <Typography variant="h5" component="h3" mb={1.5}>
          Booking Confirmation
        </Typography>

        <Typography fontSize={14} mb={3}>
          <Box component="span">Please provide your email to confirm your booking for </Box>
          <Box component="span" fontWeight={600}>
            {`${bookingDetails.bookingTime} on ${formatBookingDate(bookingDetails.bookingDate)}`}
          </Box>
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
            />
            <Stack direction="row" spacing={1}>
              <Button type="submit" variant="contained" size="large">
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
