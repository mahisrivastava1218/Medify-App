import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";

import icon from "../../assets/div.u-pos-has.png";
import thumb from "../../assets/span.o-label--success.png";
import Calendar from "../../components/Calendar/Calendars";

export default function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 2, md: 4 }}
        flexWrap="wrap"
      >
        {/* Hospital Logo */}
        <Box
          component="img"
          src={icon}
          width={{ xs: 64, md: 130 }}
          height="auto"
          sx={{ alignSelf: "flex-start" }}
        />

        {/* Hospital Information */}
        <Box flex={1}>
          <Typography
            component="h3"
            color="primary.main"
            fontWeight={500}
            fontSize={{ xs: 18, md: 20 }}
            mb={1}
            textTransform="capitalize"
            lineHeight={1.2}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>

          <Typography
            textTransform="capitalize"
            color="#414146"
            fontSize={14}
            fontWeight={700}
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>

          <Typography fontSize={14} mb={1}>
            {details["Hospital Type"]}
          </Typography>

          {/* Pricing Section */}
          <Stack direction="row" flexWrap="wrap" spacing="4px" mb={2}>
            <Typography
              fontWeight={800}
              textTransform="uppercase"
              color="primary.green"
            >
              No Charge
            </Typography>
            <Typography
              sx={{ textDecoration: "line-through", color: "#787887" }}
            >
              ₹500
            </Typography>
            <Typography>In-clinic consultation fee</Typography>
          </Stack>

          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />

          {/* Rating */}
          <Stack
            direction="row"
            alignItems="center"
            bgcolor="primary.green"
            py="4px"
            px={1}
            borderRadius={1}
            width="fit-content"
            spacing="4px"
          >
            <Box
              component="img"
              src={thumb}
              width={{ xs: 16, md: 20 }}
              height={{ xs: 16, md: 20 }}
            />
            <Typography
              fontWeight={700}
              fontSize={{ xs: 14, md: 16 }}
              color="#fff"
              sx={{ opacity: 0.5 }}
            >
              {details["Hospital overall rating"] === "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        {/* Booking or Confirmed Slot Section */}
        <Stack
          justifyContent={booking ? "flex-start" : "flex-end"}
          minWidth="23%"
        >
          {!booking ? (
            <>
              <Typography
                textAlign="center"
                color="primary.green"
                fontSize={14}
                fontWeight={500}
                mb={1}
              >
                Slots Open Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
                label="Book FREE Center Visit"
              >
                {showCalendar ? "Hide Calendar" : "Book FREE Center Visit"}
              </Button>
            </>
          ) : (
            <Stack direction="row" spacing={1} mt={{ xs: 2, md: 0 }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
              <Chip
                label={(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={{ borderRadius: 1, fontSize: 14 }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Booking Calendar */}
      {showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}
