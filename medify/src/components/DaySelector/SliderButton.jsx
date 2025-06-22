import { useSwiper } from 'swiper/react';
import { Box } from '@mui/material';
import nextIcon from '../../assets/i.icon-ic_next_cheveron.png';
import prevIcon from '../../assets/i.icon-ic_back_cheveron.png';

// Button to go to the previous slide
function SliderPreButton() {
  const swiper = useSwiper();

  return (
    <Box
      component="img"
      src={prevIcon}
      alt="Previous"
      onClick={() => swiper.slidePrev()}
      height={48}
      width={48}
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        cursor: 'pointer',
        zIndex: 999,
        backgroundColor: '#fff',
      }}
    />
  );
}

// Button to go to the next slide
function SliderNextButton() {
  const swiper = useSwiper();

  return (
    <Box
      component="img"
      src={nextIcon}
      alt="Next"
      onClick={() => swiper.slideNext()}
      height={48}
      width={48}
      sx={{
        position: 'absolute',
        right: 0,
        top: 0,
        cursor: 'pointer',
        zIndex: 999,
        backgroundColor: '#fff',
      }}
    />
  );
}

export { SliderNextButton, SliderPreButton };
