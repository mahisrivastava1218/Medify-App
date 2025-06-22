import {Box,Stack, Typography} from "@mui/material";
export default function IconGrid({
img,
title,
bgColor,
active=false,
shadow=false,
}){
    return(
        <Stack alignItems="center" bgcolor={active ? "rgba(42,167,255,0.08)":bgColor}
        spacing={3}
        p={2}
        borderRadius={2}
        border={active ? "1px solid #2AA7FF":"0"}
        boxShadow={shadow ? "0 0 24px rgba(0,0,0,0.09)":"none"}>
        <Box component="img" src={img} height={62} width={62}/>
        <Typography color={active ? "primary.main":"#ABB6C7"} fontSize={19} fontWeight={active ? 600 : 400}>
            {title}
        </Typography>

        </Stack>
    )
}