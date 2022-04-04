import { ThemeProvider, createTheme } from '@mui/material';
import RouterContainer from './routes';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterContainer />
    </ThemeProvider>
  );
}

export default App;
