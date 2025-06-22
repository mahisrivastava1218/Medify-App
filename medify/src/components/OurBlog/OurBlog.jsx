import { Box, Container, Grid, Typography } from "@mui/material";
import OurBlogCard from "./OurBlogCard";

export default function OurBlog() {
    return (
        <Box py={6}>
            <Container>
                <Typography color='primary.main' fontWeight={600} textAlign='center'>
                    Blog & News
                </Typography>
                <Typography textAlign='center' variant='h2' mb={2}>
                    Read Our Latest News
                </Typography>

                <Grid container spacing={2} justifyContent="center" width={1}>
                    <Grid item xs={12} md={4} sx={{width:{xs:"100%",md:"32%"}}}>
                        <OurBlogCard />
                    </Grid>
                    <Grid item xs={12} md={4}  sx={{width:{xs:"100%",md:"32%"}}}>
                        <OurBlogCard />
                    </Grid>
                    <Grid item xs={12} md={4}  sx={{width:{xs:"100%",md:"32%"}}}>
                        <OurBlogCard />
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}