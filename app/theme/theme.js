import { createTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsla(228, 100%, 69%, 1)',
      light: blue[300],
    },
    secondary: {
      main: '#ffa500',
    },
    common: {
      white: '#fff',
      black: 'black',
    },
  },
  typography: {
    fontFamily: "'Montserrat'",
    h1: {
      fontSize: '5rem',
    },
    pxToRem(size) {
      return `${(size / htmlFontSize) * coef}rem`;
    },
  },
});
export default theme;
