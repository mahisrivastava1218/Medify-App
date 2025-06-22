import { Box, Container, Grid, Typography } from "@mui/material";
import familiesImg from '../../assets/families.png'

export default function Families() {
    return (
        <Box pt={2} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container alignItems='center' gap={{xs:2,md:0}}>

                    <Grid item xs={12} md={6} sx={{width:{xs:"100%",md:"50%"}}}>
                        <Typography
                            fontWeight={500}
                            color="primary.main"
                        >
                            CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
                        </Typography>
                        <Typography variant="h2">
                            Our Families
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{width:{xs:"100%",md:"50%"}}}>
                        <Box
                            component='img'
                            src={familiesImg}
                            width={1}
                            height='auto'
                        />
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}