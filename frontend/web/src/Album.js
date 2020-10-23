import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles/styles";

import Container from "@material-ui/core/Container";
import PanettoneItem from "./components/PanettoneItem";
import api from "./services/api";

export default function Album() {
  const classes = useStyles();

  const [panettones, setPanettones] = useState([]);

  useEffect(() => {
    api
      .get("/panettones")
      .then((response) => {
        setPanettones(response.data);
        console.log(response.data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar} position="relative">
        <Toolbar>
          <Typography variant="h6" className={classes.appBarText} noWrap>
            Panettone Catalog
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              className={ classes.mainTitle}
              color="inherit"
              component="h5"
              variant="h3"
              align="center"
              gutterBottom
            >
              Estes são os produtos do nosso catálogo!
            </Typography>
            <Container className={classes.cardGrid} maxWidth="xm">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {panettones.map((panettone) => (
                  <PanettoneItem panettone={panettone} />
                ))}
              </Grid>
            </Container>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
