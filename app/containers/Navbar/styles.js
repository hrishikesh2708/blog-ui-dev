import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(() => ({
  root: {
    color: '#6383FF',
    backgroundColor: 'transparent',
    width: '90%',
    margin: 'auto',
  },
  toolbar: {
    display: 'flex',
  },
  left: {
    flexGrow: 1,
  },
  right: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '35%',
  },
  logo: {
    position: 'absolute',
    top: '-23px',
    left: '-50px',
    transform: 'scale(0.60)',
  },
  btns: {
    borderRadius: 0,
    fontWeight: 700,
    border: '2px solid #6383FF',
  },
}));
