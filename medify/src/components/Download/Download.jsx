import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Sms from "./Sms";

import mobileImage from "../../assets/mobileImg.png";
import googlePlayIcon from "../../assets/google_play.png.png";
import appleIcon from "../../assets/apple_store.png.png";
import arrowIcon from "../../assets/Vector.png";

const DownloadApp = () => {
  return (
    <Box sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 6 }}>
      <Container>
        <Grid container alignItems="center" spacing={4}>
          {/* Left image section */}
          <Grid item xs={12} md={5}>
            <Box component="img" src={mobileImage} alt="App Preview" width="100%" />
          </Grid>

          {/* Right content section */}
          <Grid item xs={12} md={7}>
            <Box position="relative" pl={{ xs: 4, md: 6 }}>
              <Typography variant="h2" mb={2}>
                Get the
                <br />
                <Box component="span" color="primary.main">
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                component="img"
                src={arrowIcon}
                width={{ xs: 24, md: 36 }}
                alt="Arrow"
                sx={{ position: "absolute", left: 0, top: 48 }}
              />

              {/* SMS Form Component */}
              <Sms />

              {/* Store Buttons */}
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1.5, md: 2 }}
                mt={3}
              >
                <Button
                  startIcon={<img src={googlePlayIcon} alt="Google Play" height={24} />}
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 2,
                  }}
                >
                  Google Play
                </Button>
                <Button
                  startIcon={<img src={appleIcon} alt="App Store" height={24} />}
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 2,
                  }}
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DownloadApp;
