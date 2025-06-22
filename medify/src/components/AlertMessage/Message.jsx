import { Snackbar, Alert } from "@mui/material";

export default function AutoCloseSnackbar({ open, setOpen }) {
  // This function closes the snackbar unless it's clicked outside (clickaway)
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false); // Close the snackbar
  };

  return (
    <Snackbar
      open={open} // show or hide based on open value
      autoHideDuration={5000} // auto-close after 5 seconds
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // position on screen
    >
      <Alert
        onClose={handleClose}
        icon={false} // remove default icon
        sx={{
          backgroundColor: "green", // background color for alert
          color: "#fff", // text color
        }}
      >
       Booking Successful {/* show the message passed from parent */}
      </Alert>
    </Snackbar>
  );
}
