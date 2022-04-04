import { Box, Toolbar } from '@mui/material';

function Body({ children }) {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      {children}
    </Box>
  );
}

export default Body;
