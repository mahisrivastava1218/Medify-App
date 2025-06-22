import { Stack, Typography, Chip, Divider } from "@mui/material";

export default function TimeSlotSelect({ availableSlots, details, handleBooking, selectedDate }) {
  // Function to trigger booking with selected time
  const onTimeSelect = (time) => {
    handleBooking({
      ...details,
      bookingDate: selectedDate,
      bookingTime: time,
    });
  };

  // Single chip component for each time slot
  const TimeChip = ({ time }) => (
    <Chip
      label={time}
      variant="outlined"
      color="primary"
      onClick={() => onTimeSelect(time)}
      sx={{
        borderRadius: 1,
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        mr: { xs: 1, md: 2 },
        mt: 1,
      }}
    />
  );

  // Render a section (morning/afternoon/evening) with its slots
  const TimeSection = ({ title, times }) => (
    <Stack
      direction="row"
      alignItems="center"
      px={{ xs: 0, md: 6 }}
      flexWrap="wrap"
    >
      <Typography width={{ xs: 1, md: "15%" }} fontSize={{ xs: 14, md: 16 }}>
        {title}
      </Typography>
      {times.map((time) => (
        <TimeChip key={time} time={time} />
      ))}
    </Stack>
  );

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider flexItem />}
    >
      {availableSlots.morning?.length > 0 && (
        <TimeSection title="Morning" times={availableSlots.morning} />
      )}
      {availableSlots.afternoon?.length > 0 && (
        <TimeSection title="Afternoon" times={availableSlots.afternoon} />
      )}
      {availableSlots.evening?.length > 0 && (
        <TimeSection title="Evening" times={availableSlots.evening} />
      )}
    </Stack>
  );
}
