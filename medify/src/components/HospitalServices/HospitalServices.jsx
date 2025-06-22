import { Box, Grid, Typography } from "@mui/material";
import doctorsIcon from "../../assets/Doctor.png";
import labsIcon from "../../assets/Drugstore.png";
import hospitalsIcon from "../../assets/Hospital.png";
import medicalIcon from "../../assets/Capsule.png";
import ambulanceIcon from "../../assets/Ambulance.png";
import IconGrid from "../IconGrid/IconGrid";
import { useMemo } from "react";

export default function HospitalServices(){
    const HospitalService =useMemo(
        ()=>[
      { img: doctorsIcon, title: "Doctors" },
      { img: labsIcon, title: "Labs" },
      { img: hospitalsIcon, title: "Hospitals", active: true },
      { img: medicalIcon, title: "Medical Store" },
      { img: ambulanceIcon, title: "Ambulance" },
        ],
        []
    )
    return(
        <Box>
            <Typography fontSize={24} textAlign="center" mt={2} mb={2} color="#102851" fontWeight={600}>You may be looking for</Typography>
            <Grid container columnSpacing={{xs:1,md:2}} justifyContent="center">
                {HospitalService.map((HospitalService)=>(
                <Grid item key={HospitalService.title} xs={4}>
                <IconGrid
                    img={HospitalService.img}
                    title={HospitalService.title}
                    active={HospitalService.active || false}
                    bgColor="#FAFBFE"
                />
                
                </Grid>
                 ))}
            </Grid>
        </Box>

    )
}