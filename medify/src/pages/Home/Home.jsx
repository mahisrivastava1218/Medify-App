import {Box,Container} from "@mui/material";
import Navbar from "./../../components/Navbar/Navbar";
import HeroSectionSlider from "../../components/HeroSectionSlider/HeroSectionSlider";
import SearchHospitals from "../../components/SearchHospitals/SearchHospitals";
import HospitalServices from "../../components/HospitalServices/HospitalServices";
import CustomerOffer from "../../components/Offers/CustomerOffers"
import Specialisation from "../../components/Specialisation/Specialisation";
import SpecialistsDoctor from "../../components/SpecialistsDoctor/SpecialistsDoctor";
import PatientCare from "../../components/PatientCare/PatientCare";
import OurBlog from "../../components/OurBlog/OurBlog";
import Families from "../../components/Families/Families";
import FAQsSection from "../../components/FAQs/FaQsSection";
import Download from "../../components/Download/Download";
export default function Home(){
    return(
        <Box>
            <Box sx={{background:"linear-gradient(#E7F0FF,rgba(232,241,255,0.47) 90%,#fff 10%)",}} mb={4}>
                <Navbar/>
                <Container maxWidth="xl">
                    <HeroSectionSlider/>
                    <Box 
                    position="relative"
                    p={{xs:3,md:8}}
                    mt={{xs:-4,md:-1,lg:-8,xl:-12}}
                    bgcolor="#fff"
                    borderRadius="15px"
                    spacing={9}
                    boxShadow="0 0 12px rgba(0,0,0,0.1)">
                        <SearchHospitals/>
                        <HospitalServices/>
                    </Box> 
                </Container>
            </Box>
            <CustomerOffer/>
            <Specialisation/>
             <SpecialistsDoctor />
            <PatientCare />
            <OurBlog />
           <Families />
            <FAQsSection /> 
             <Download/> 
        </Box>
    )
}