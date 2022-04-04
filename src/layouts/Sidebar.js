import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard,
  People,
  ShoppingCart,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function SideBar({ open, onChangeDrawer }) {
  const navigate = useNavigate();

  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={onChangeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component='nav'>
        {[
          {
            name: 'Home',
            icon: <Dashboard />,
            path: '/',
          },
          {
            name: 'Orders',
            icon: <ShoppingCart />,
            path: '/orders',
          },
          {
            name: 'Customers',
            icon: <People />,
            path: '/customers',
          },
        ].map((li) => (
          <ListItemButton key={li.name} onClick={() => navigate(li.path)}>
            <ListItemIcon>{li.icon}</ListItemIcon>
            <ListItemText primary={li.name} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
