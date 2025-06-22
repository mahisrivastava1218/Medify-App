
import {Button,MenuItem,Select,InputAdornment, Box} from "@mui/material"
import { useState,useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
export default function SearchHospitals(){
    const[state,setState] = useState([]);
    const[cities,setCities] = useState([]);
    const[formData,setFormData] = useState({state:"",city:""});
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchStates= async()=>{
            try{
                const response = await axios.get("https://meddata-backend.onrender.com/states");
                setState(response.data);
            }catch(e){
                console.error("unable to fetch States:",e);
            }
        };
        fetchStates();
    },[])
    useEffect(()=>{
        const fetchCities = async()=>{
            setCities([]);
            setFormData((prev)=>({...prev,city:""}))
            try{
                const response = await axios.get(`https://meddata-backend.onrender.com/cities/${formData.state}`);
                setCities(response.data);
            }catch(e){
                console.error("unable to fetch cities",e);
            }
        }
        if(formData.state!==""){
         fetchCities();
        }
    },[formData.state]);
    const handleSubmit=(e)=>{
        e.preventDefault(); //reload
        if(formData.state && formData.city){
            navigate(`/search?state=${formData.state}&city=${formData.city}`);
        }
    }
    const handleChange = (event)=>{
       const{name,value}=event.target;
       setFormData((prev)=>({
        ...prev,
        [name]: value
       }))
    }
    return(
        <Box 
        component="form"
        onSubmit={handleSubmit} 
        sx={{
            display:"flex",
            gap:4,
            justifyContent:"space-between",
            flexDirection:{xs:"column",md:"row"}
        }}
        >
        <Select displayEmpty name="state" id="state" value={formData.state} onChange={handleChange}
        startAdornment={
              <InputAdornment position="start">
            <SearchIcon/>
        </InputAdornment>
        }
        required
        sx={{minWidth:240, width:"95%"}}
        >
          <MenuItem disabled value="" selected>
            State
          </MenuItem>
            {Array.isArray(state) && state.map((state)=>(
                <MenuItem value={state} key={state}>
                    {state}
                </MenuItem>
            ))}
        </Select>
          <Select displayEmpty name="city" id="city" value={formData.city} onChange={handleChange}
        sx={{minWidth:240, width:"95%"}}
         startAdornment={
              <InputAdornment position="start">
            <SearchIcon/>
        </InputAdornment>
        }
        required
        >
          <MenuItem disabled value="" selected>
            City
          </MenuItem>
            {Array.isArray(cities) && cities.map((city)=>(
                <MenuItem key={city} value={city}>
                    {city}
                </MenuItem>
            ))} 
        </Select>
        <Button startIcon=<SearchIcon/> type="submit" labeled="Search" id="searchBtn" variant="contained" sx={{px:8,py:"10px"}} disableElevation size="large">Search</Button> 
        </Box>
    )
}