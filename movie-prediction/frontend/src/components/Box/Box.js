import React from 'react';
import Box from '@material-ui/core/Box';

const MuiBox = () => {
  return (
    <Box
      border={1}
      borderColor="red"
      height={100}
      width={100}
      display="flex"
      justifyContent="center"
      alignItems="center"
    //   bgcolor="blue"
      color="white"
      fontSize={24}
    >
     
    </Box>
  );
};

export default MuiBox;