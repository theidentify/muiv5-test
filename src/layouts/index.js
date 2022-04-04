import { Box } from '@mui/material';
import { useState } from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import SideBar from './Sidebar';

const LayoutContainer = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header open={open} onChangeDrawer={() => setOpen((prev) => !prev)} />
      <SideBar open={open} onChangeDrawer={() => setOpen((prev) => !prev)} />
      <Body>{children}</Body>
      <Footer />
    </Box>
  );
};

export default LayoutContainer;
