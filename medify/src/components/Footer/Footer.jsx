import {
  Box,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";

import logo from "../../assets/logo.png";
import facebook from "../../assets/facebooks.png";
import twitter from "../../assets/twitters.png";
import youtube from "../../assets/youtubes.png";
import pinterest from "../../assets/pinterests.png";
import FooterLinks from "./FooterLink";

const Footer = () => {
  return (
    <Box bgcolor="primary.main" pt={6} pb={2} px={2} mt={2} width={1}>
      <Container maxWidth="xl">
        <Grid container gap={4}>
          {/* Logo and Social Icons */}
          <Grid item xs={12} md={3}>
            <Stack
              alignItems="flex-start"
              justifyContent="space-between"
              height={1}
              spacing={2}
            >
              <Box
                component="img"
                src={logo}
                alt="medify-logo"
                height={40}
              />
              <Stack direction="row" spacing={1} height={1} width="35%">
                <Box component="img" src={facebook} alt="Facebook" height={37} />
                <Box component="img" src={twitter} alt="Twitter" height={37} />
                <Box component="img" src={youtube} alt="YouTube" height={37} />
                <Box component="img" src={pinterest} alt="Pinterest" height={37} />
              </Stack>
            </Stack>
          </Grid>

          {/* Links - Section 1 */}
          <Grid item xs={12} sm={12} md={3}>
            <Stack spacing={1.5}>
              <FooterLinks>About Us</FooterLinks>
              <FooterLinks>Our Pricing</FooterLinks>
              <FooterLinks>Our Gallery</FooterLinks>
              <FooterLinks>Appointment</FooterLinks>
              <FooterLinks>Privacy Policy</FooterLinks>
            </Stack>
          </Grid>

          {/* Links - Section 2 */}
          <Grid item xs={12} sm={12} md={3}>
            <Stack spacing={1.5}>
              <FooterLinks>Orthology</FooterLinks>
              <FooterLinks>Neurology</FooterLinks>
              <FooterLinks>Dental Care</FooterLinks>
              <FooterLinks>Opthalmology</FooterLinks>
              <FooterLinks>Cardiology</FooterLinks>
            </Stack>
          </Grid>

          {/* Links - Section 3 */}
          <Grid item xs={12} sm={12} md={3}>
            <Stack spacing={1.5}>
              <FooterLinks>FAQs</FooterLinks>
              <FooterLinks>Blog</FooterLinks>
              <FooterLinks>Contact</FooterLinks>
              <FooterLinks>Terms & Conditions</FooterLinks>
              <FooterLinks>Support</FooterLinks>
            </Stack>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Typography
          mt={5}
          pt={3}
          textAlign="center"
          fontSize={14}
          color="white"
          borderTop="1px solid rgba(255,255,255,0.2)"
        >
          Copyright ©2023 Surya Nursing Home. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
