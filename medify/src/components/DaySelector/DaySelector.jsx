import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Stack, Typography, Divider } from "@mui/material";
import styles from "./DaySelect.module.css";
import { format, add, isEqual, startOfDay } from "date-fns";
import { SliderNextButton, SliderPreButton } from "./SliderButton";

export default function DaySelector({ selectedDate, setSelectedDate, totalSlots }) {
  const today = startOfDay(new Date());
  const nextSevenDays = [];

  // Generate a list of 7 days starting from today
  for (let i = 0; i < 7; i++) {
    nextSevenDays.push(add(today, { days: i }));
  }

  // Format how each date is shown in the UI
  const getDisplayDate = (day) => {
    if (isEqual(day, today)) return "Today";
    if (isEqual(day, add(today, { days: 1 }))) return "Tomorrow";
    return format(day, "E, d LLL");
  };

  // Handle user clicking a date
  const handleDateSelect = (day) => {
    setSelectedDate(day);
  };

  return (
    <Stack pt={3} position="relative">
      <Divider sx={{ mb: 3 }} />

      <Swiper
        slidesPerView={4}
        loop={false}
        spaceBetween={12}
        className={styles.swiperStyles}
        breakpoints={{
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* Render each day as a slide */}
        {nextSevenDays.map((day, index) => (
          <SwiperSlide key={index} className={styles.swiperslide}>
            <Stack
              textAlign="center"
              onClick={() => handleDateSelect(day)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                fontSize={{ xs: 11, md: 16 }}
              >
                {getDisplayDate(day)}
              </Typography>
              <Typography fontSize={{ xs: 8, md: 12 }} color="primary.green">
                {totalSlots} Slots Available
              </Typography>

              {/* Highlight bar for selected day */}
              <Box
                height={{ xs: "4px", md: "5px" }}
                width={{ xs: 1, md: "calc(100% - 50px)" }}
                bgcolor={isEqual(day, selectedDate) ? "primary.main" : "transparent"}
                mt="5px"
                mx="auto"
              />
            </Stack>
          </SwiperSlide>
        ))}

        {/* Previous and Next buttons (only on larger screens) */}
        <span slot="container-start">
          <Box display={{ xs: "none", md: "block" }}>
            <SliderPreButton />
          </Box>
        </span>
        <span slot="container-end">
          <Box display={{ xs: "none", md: "block" }}>
            <SliderNextButton />
          </Box>
        </span>
      </Swiper>

      {/* Bottom highlight bar behind the date slides */}
      <Box
        height={{ xs: "4px", md: "5px" }}
        width={{ xs: 1, md: "calc(100% - 150px)" }}
        bgcolor="#F0F0F5"
        mt="5px"
        position="absolute"
        bottom={0}
        left="50%"
        sx={{ translate: "-50% 0" }}
      />
    </Stack>
  );
}
