import React,{ useContext } from 'react'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Typography, Box } from "@mui/material";
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import Button from '@mui/material/Button';
import './scroll.css';

// const LeftClick = ()=>{
//   window.scrollBy(10,0);
// }
// const RightClick = ()=>{
//   window.scrollBy(-10,0);
// }
const Scroll = ({data}) => {
    console.log(data);
  return (
      <div className="scrollmenu" >

    {data.map((item) => {
      return (
        <Box>
          <img src={item.gifUrl} alt="img" width="400rem"/>
          <Button variant="contained" className="bodyPart">{item.bodyPart}</Button>
          <Button variant="contained" className="target">{item.target}</Button>
          <h3 className="name">{item.name}</h3>
      
        </Box>
      );
    })}
      </div>
  )
}

export default Scroll