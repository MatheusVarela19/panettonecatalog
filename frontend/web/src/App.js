import Album from './Album';
import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles/styles'

export default function App() {
  const classes = useStyles();

  return (
    <Box className={ classes.mainContainer }>
      <Album />
    </Box>
  );
}