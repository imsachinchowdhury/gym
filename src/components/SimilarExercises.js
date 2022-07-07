import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HoriozontalScrollbar from './HoriozontalScrollbar';
import Scroll from './Scroll';
import Loader from './Loader';
import './scroll.css'
// import { LocalDining } from '@mui/icons-material';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  // console.log(equipmentExercises)
  return (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography variant='h3' sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb={5}>
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length  ? <Scroll data={targetMuscleExercises} />  : <Loader/>}

    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length  ? <Scroll data={equipmentExercises} /> : <Loader/>}
    </Stack>
  </Box>
)}


export default SimilarExercises;