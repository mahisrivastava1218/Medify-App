import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";

import patientImg from '../../assets/patientcare.png';
import tick from '../../assets/tick.png';

export default function PatientCare() {
    return (
        <Box p={7} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Grid container spacing={3} alignItems="center">
                    
                    {/* Image Section */}
                    <Grid item xs={12} sm={6}>
                        <Box
                            component="img"
                            src={patientImg}
                            alt="Patient Care"
                            sx={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />
                    </Grid>

                    {/* Text Section */}
                    <Grid item sx={{ width: { xs: '100%', md: '50%' } }}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>

                        <Typography variant="h2" mb={1}>
                            Patient <Box component="span" color="primary.main">Caring</Box>
                        </Typography>

                        <Typography color="#77829D" lineHeight={1.8}>
                            Our goal is to deliver quality of care in a courteous, respectful,
                            and compassionate manner. We hope you will allow us to care for you
                            and strive to be the first and best choice for healthcare.
                        </Typography>

                        <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component="img" src={tick} height={20} width={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Stay Updated About Your Health"
                                    primaryTypographyProps={{
                                        fontSize: { xs: 14, md: 18 },
                                        fontWeight: 500,
                                        color: '#1B3C74'
                                    }}
                                />
                            </ListItem>

                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component="img" src={tick} height={23} width={23} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Check Your Results Online"
                                    primaryTypographyProps={{
                                        fontSize: { xs: 14, md: 18 },
                                        fontWeight: 500,
                                        color: '#1B3C74'
                                    }}
                                />
                            </ListItem>

                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component="img" src={tick} height={23} width={23} />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Manage Your Appointments"
                                    primaryTypographyProps={{
                                        fontSize: { xs: 14, md: 18 },
                                        fontWeight: 500,
                                        color: '#1B3C74'
                                    }}
                                />
                            </ListItem>
                        </List>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
}
