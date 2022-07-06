import React from 'react'
import {Stack} from '@mui/material';
import {SpinnerInfinity} from 'spinners-react';
const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignitems="center" width="100%">
        <SpinnerInfinity speed={100} color="gray" size={150} />
    </Stack>
  )
}

export default Loader