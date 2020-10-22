import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BF4D43',
    },
    secondary: {
      main: '#401a16',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#401a16',
      paper: '#80342D',
    },
  },
});

export default theme;