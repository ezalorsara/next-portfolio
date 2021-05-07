import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: `"Teko", sans-serif`,
    button: {
      textTransform: 'none',
      letterSpacing: 'normal',
    },
  },
  palette: {
    primary: {
      main: '#202225',
      contrastText: '#FFF',
      light: '#9C9C9C',
    },
    secondary: {
      main: '#D08226',
      contrastText: '#FFF',
      light: '#339AF0',
    },
    background: {
      default: '#F5F5F5',
    },
  },
});

export default theme;
