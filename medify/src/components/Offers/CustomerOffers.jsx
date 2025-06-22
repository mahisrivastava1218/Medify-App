import { Box, Container } from "@mui/material";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import CustomerOffer1 from '../../assets/offer1.png';
import CustomerOffer2 from '../../assets/offer2.png';

const offerImages = [CustomerOffer1, CustomerOffer2, CustomerOffer1, CustomerOffer2, CustomerOffer1, CustomerOffer2];

export default function CustomerOffers() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={31}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        767: {
                            slidesPerView: 3
                        }
                    }}
                >
                    {offerImages.map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <Box
                                component="img"
                                src={img}
                                alt={`Customer offer ${idx + 1}`}
                                sx={{
                                    width: '100%',
                                    borderRadius: 2,
                                    boxShadow: 2,
                                    objectFit: 'cover'
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
}
