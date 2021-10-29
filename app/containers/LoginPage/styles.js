import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100vh',
  },
  left: {
    backgroundColor: 'red',
    flexGrow: 1,
  },
  right: {
    flexGrow: 1,
  },
}));
