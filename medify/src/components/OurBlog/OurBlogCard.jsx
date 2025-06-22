import { Box, Typography } from "@mui/material";
import detoxImg from '../../assets/Detox.png'
import avatar from '../../assets/avatar.jpg'

export default function OurBlogCard() {
    return (
        <Box border='1px solid rgba(0,0,0,0.1)' sx={{borderRadius:"40px"}}>
            <Box
                component='img'
                src={detoxImg}
                width={1}
                borderRadius={2}
            />
            <Box p={2}>
                <Typography color='#77829D' fontWeight={500} mb={2} fontSize={{ xs: 12, md: 16 }}>
                    Medical | March 31, 2022
                </Typography>
                <Typography component='h3' color='#1B3C74' fontSize={{ xs: 14, md: 18 }} fontWeight={500} lineHeight={1.2} mb={2}>
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Box display="flex" gap={1} alignItems='center'>
                    <Box
                        component='img'
                        src={avatar}
                        height={32}
                        width={32}
                    />
                    <Typography color='#1B3C74' fontSize={{ xs: 12, md: 16 }}>
                        Rebecca Lee
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}