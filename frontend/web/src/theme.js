import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F02521',
      text: '#ffffff',
      shadow: '#703231'
    },
    secondary: {
      main: '#703231',
      text: '#E15F58',
      shadow: '#c4c4c4'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#704442',
      paper: '#B83B34',
    },
  },
});

export default theme;