import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
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
    height: '80px',
    width: '400px',
    overflow: 'hidden',
    position: 'relative',
    top: '40px',
    left: '100px',
    borderLeft: '30px solid hsla(228, 100%, 69%, 1)',
  },
  logo: {
    position: 'absolute',
    top: '-20px',
  },
  inputFieldsContainer: {
    margin: '120px 0 0 100px',
  },
  welcomeText: {
    color: ' hsla(228, 100%, 69%, 1)',
    fontWeight: 600,
  },
  welcomeMessage: {
    fontFamily: "'Montserrat'",
    width: '80%',
    color: '#B8B8B8',
    fontWeight: 200,
    marginBottom: '30px',
  },
  inputFieldEmail: {
    width: '100%',
    height: '40%',
    paddingLeft: '10px',
    border: 0,
    fontSize: '1.5rem',
    color: 'black',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 'none',
    },
  },
  inputWrap: {
    width: '90%',
    height: '7vh',
    border: '1px solid #B8B8B8',
    borderLeft: '8px solid  #B8B8B8',
  },
  inputWrapFocused: {
    width: '90%',
    height: '7vh',
    border: '1px solid #B8B8B8',
    borderLeft: '8px solid #61a5c2',
  },
  inputWrapName: {
    width: '90%',
    height: '7vh',
    border: '1px solid #B8B8B8',
    borderLeft: '8px solid  #B8B8B8',
    borderTop: 0,
  },
  inputWrapFocusedName: {
    width: '90%',
    height: '7vh',
    border: '1px solid #B8B8B8',
    borderLeft: '8px solid #61a5c2',
    borderTop: 0,
  },
  email: {
    fontFamily: "'Montserrat'",
    fontWeight: 700,
    color: '#B8B8B8',
    marginLeft: '10px',
  },
  checkBoxContainer: {
    marginTop: '4vh',
    position: 'relative',
  },
  checkBoxLabel: {
    color: '#B8B8B8',
    fontFamily: "'Montserrat'",
  },
  checkBox: {
    padding: 0,
    left: '-3px',
    '&>.MuiIconButton-label': {
      color: 'hsla(228, 100%, 69%, 1)',
    },
  },
  forgotPassword: {
    position: 'absolute',
    right: 65,
    fontFamily: "'Montserrat'",
    fontWeight: 700,
  },
  ButtonContainer: {
    marginTop: '100px',
    width: '90%',
  },
  loginButton: {
    width: '150px',
    height: '50px',
    backgroundColor: '#1597E5',
    color: 'white',
    fontSize: '1.2rem',
    borderRadius: 0,
    marginRight: '30px',
    '&:hover': {
      backgroundColor: '#D1E8E4',
    },
  },

  signUpButton: {
    width: '150px',
    height: '50px',
    backgroundColor: 'transparent',
    color: 'black',
    border: '1px solid grey',
    borderRadius: 0,
    fontSize: '1.2rem',
  },
}));
