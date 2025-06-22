import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import img1 from '../../assets/lesley.png'
import img2 from '../../assets/ahmad.png'
import img3 from '../../assets/Heena.png'
import img4 from '../../assets/ankur.png'
import img5 from '../../assets/ahmad-steeve.png'
import SpecialistsDoctorCard from './SpecialistDoctorCard'
import { Autoplay, Pagination } from 'swiper/modules';

export default function SpecialistsDoctor() {

    const DoctorData = [
        { img: img1, title: 'Dr. Lesley Hull', position: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', position: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', position: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', position: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', position: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', position: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', position: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', position: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', position: 'Neurologist' }
    ]

    return (
        <Box py={4}>
            <Typography variant="h2" textAlign='center' mb={3} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true
                }}
                breakpoints={
                    {
                        767: {
                            slidesPerView: 4
                        }
                    }
                }
            >
                {DoctorData.map((doctor, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistsDoctorCard
                            img={doctor.img}
                            title={doctor.title}
                            position={doctor.position} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}