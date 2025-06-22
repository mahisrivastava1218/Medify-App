import {Link,Stack} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function FooterLink({children}){
    return(
        <Link underline="none" color="#fff" xs={{fontweight:"300px"}} fontSize={14}>
            <Stack direction="row" gap={0.5}>
                <ArrowForwardIosIcon/>
                {children}
            </Stack>
        </Link>
    )
}