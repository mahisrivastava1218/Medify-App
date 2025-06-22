import { Box, Button, Container, Grid, Typography } from "@mui/material";
import DrugIcon from '../../assets/Drugstore.png'
import PrimaryIcon from '../../assets/Drugstore-1.png'
import CardiologyIcon from '../../assets/Heart Rate Monitor.png'
import MriIcon from '../../assets/Heart Rate.png'
import BloodIcon from '../../assets/Immune.png'
import PiscologistIcon from '../../assets/Stethoscope.png'
import XRayIcon from '../../assets/X-Ray.png'
import IconGrid from "../../components/IconGrid/IconGrid"
export default function Specialization() {

    const SpecializationData = [
        { icon: DrugIcon, title: 'Dentistry' },
        { icon: PrimaryIcon, title: 'Primary Care' },
        { icon: CardiologyIcon, title: 'Cardiology' },
        { icon: MriIcon, title: 'MRI Resonance' },
        { icon: BloodIcon, title: 'Blood Test' },
        { icon: PiscologistIcon, title: 'Laboratory' },
        { icon: XRayIcon, title: 'X-Ray' }
    ]

    return (
        <Box py={5} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography variant="h3" mb={4}>
                    Find by specialisation
                </Typography>

                <Grid container spacing={{ xs: 1, md: 3 }} mb={5} justifyContent={'center'}>

                    {SpecializationData.map(item => (
                        <Grid item xs={4} md={3} key={item.title}>
                            <IconGrid img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
                        </Grid>
                    ))}

                </Grid>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                >
                    View All
                </Button>

            </Container>
        </Box>
    )
}