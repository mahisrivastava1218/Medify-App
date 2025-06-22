import React, { useState } from "react";
import { Box } from "@mui/material";
import { startOfDay } from "date-fns";
import DaySelector from "../DaySelector/DaySelector";
import TimeSlotSelect from "../TimeSlot/TimeSlotTake";

export default function Calendar({ availableSlots, details, handleBooking }) {
  // Set the default selected date to today's start
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  // Count all available slots (morning + afternoon + evening)
  const totalAvailable =
    (availableSlots?.morning?.length || 0) +
    (availableSlots?.afternoon?.length || 0) +
    (availableSlots?.evening?.length || 0);

  return (
    <Box>
      {/* Component to choose a day */}
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalAvailable}
      />

      {/* Component to display available time slots */}
      <TimeSlotSelect
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
