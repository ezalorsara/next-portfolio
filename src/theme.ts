import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: `"Montserrat", sans-serif`,
    button: {
      textTransform: 'none',
      letterSpacing: 'normal',
    },
  },
  palette: {
    primary: {
      main: '#000000',
      light: '#767676',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#f8f8f8',
    },
  },
});

export default theme;
