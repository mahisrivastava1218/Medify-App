import { Box,Button,Stack, Typography } from "@mui/material";
import {Link} from "react-router-dom";
import {Swiper,SwiperSlide} from "swiper/react"
import HeroImg from "../../assets/hero_image.png";
import 'swiper/css';
export default function HeroSectionSlider(){
    return(
        <Swiper>
            <SwiperSlide>
                <Stack direction={{xs:"column",md:"row"}} spacing={3} alignItems="center">
                    <Box>
                        <Typography variant="h3" component='h1' color="blue">Skip the travel! Find Online</Typography>
                        <Typography mb={2} fontWeight="bold" component='h1' variant="h2">Medical{" "}<span style={{ color: '#2AA7FF' }}>Centers</span></Typography>
                        <Typography mb={4} sx={{color:"#5C6169",fontSize:{
                            xs:16,
                            md: 20
                            },
                            }}>
                           Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                            </Typography>
                            <Link to="/search">
                                <Button variant="contained" size="large" sx={{borderRadius:"10px",padding:"13px"}} disableElevation>Find Centers</Button>
                            </Link>
                    </Box>
                    <Box
                        src={HeroImg}
                        component={'img'}
                        width={{xs:1,md:"50%"}}
                    />
                </Stack>
            </SwiperSlide>
        </Swiper>
    )
}