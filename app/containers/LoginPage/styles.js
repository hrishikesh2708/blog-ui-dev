import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme/theme';
export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%',
  },
  left: {
    width: '40%',
  },
  right: {
    width: '60%',
  },
  LoginPageSVG: {
    transform: 'scale(0.55)',
  },
  logoBox: {
    height: theme.typography.pxToRem(80),
    width: theme.typography.pxToRem(400),
    overflow: 'hidden',
    position: 'relative',
    top: theme.typography.pxToRem(40),
    left: theme.typography.pxToRem(100),
    borderLeft: `${theme.typography.pxToRem(30)} solid ${
      theme.palette.primary.main
    }`,
  },
  logo: {
    position: 'absolute',
    top: theme.typography.pxToRem(-20),
  },
  inputFieldsContainer: {
    margin: `${theme.typography.pxToRem(120)} 0 0 ${theme.typography.pxToRem(
      100,
    )}`,
  },
  welcomeText: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  welcomeMessage: {
    width: '80%',
    color: grey[400],
    fontWeight: 200,
    marginBottom: theme.typography.pxToRem(30),
  },
  inputFieldEmail: {
    width: '100%',
    height: '40%',
    paddingLeft: theme.typography.pxToRem(10),
    border: 0,
    fontSize: theme.typography.pxToRem(24),
    color: theme.palette.common.black,
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 'none',
    },
  },
  inputWrap: {
    width: '90%',
    height: theme.typography.pxToRem(60),
    border: `${theme.typography.pxToRem(1)} solid ${grey[400]}`,
    borderLeft: `${theme.typography.pxToRem(8)} solid ${grey[400]}`,
  },
  inputWrapFocused: {
    width: '90%',
    height: theme.typography.pxToRem(60),
    border: `${theme.typography.pxToRem(1)} solid${grey[400]}`,
    borderLeft: `${theme.typography.pxToRem(8)}  solid ${
      theme.palette.primary.main
    }`,
  },
  inputWrapName: {
    width: '90%',
    height: theme.typography.pxToRem(60),
    border: `${theme.typography.pxToRem(1)} solid${grey[400]}`,
    borderLeft: `${theme.typography.pxToRem(8)} solid ${grey[400]}`,
    borderTop: 0,
  },
  inputWrapFocusedName: {
    width: '90%',
    height: theme.typography.pxToRem(60),
    border: `${theme.typography.pxToRem(1)} solid${grey[400]}`,
    borderLeft: `${theme.typography.pxToRem(8)}  solid ${
      theme.palette.primary.main
    }`,
    borderTop: 0,
  },
  email: {
    fontWeight: 700,
    color: grey[400],
    marginLeft: theme.typography.pxToRem(10),
  },
  checkBoxContainer: {
    marginTop: theme.typography.pxToRem(35),
    position: 'relative',
  },
  checkBoxLabel: {
    color: grey[400],
  },
  checkBox: {
    padding: 0,
    left: theme.typography.pxToRem(-3),
    '&>.MuiIconButton-label': {
      color: theme.palette.primary.main,
    },
  },
  forgotPassword: {
    position: 'absolute',
    right: 65,
    fontWeight: 700,
  },
  ButtonContainer: {
    marginTop: theme.typography.pxToRem(100),
    width: '90%',
  },
  loginButton: {
    width: theme.typography.pxToRem(150),
    height: theme.typography.pxToRem(50),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(20),
    borderRadius: 0,
    marginRight: theme.typography.pxToRem(30),
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },

  signUpButton: {
    width: theme.typography.pxToRem(150),
    height: theme.typography.pxToRem(50),
    backgroundColor: 'transparent',
    color: theme.palette.common.black,
    border: `${theme.typography.pxToRem(1)} solid${grey[400]}`,
    borderRadius: 0,
    fontSize: theme.typography.pxToRem(20),
  },
}));
