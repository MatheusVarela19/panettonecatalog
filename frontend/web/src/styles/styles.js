import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainTitle: {
    color: theme.palette.primary.text,
    textShadow: '2px 2px 2px ' + theme.palette.primary.shadow
  },
  appBarText: {
    color: theme.palette.primary.text,
    textShadow: '2px 2px 2px ' + theme.palette.primary.shadow
  },
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardMediaText: {
    color: theme.palette.primary.text,
  },
  cardContent: {
    flexGrow: 2,
  },
}));

export default useStyles;