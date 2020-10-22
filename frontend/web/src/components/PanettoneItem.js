import React, { memo } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import useStyles from "../styles/styles";

const PanettoneItem = panettone => {
  const classes = useStyles();

  return (
    <Grid item key={panettone.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={panettone.image}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {panettone.name}
          </Typography>
          <Typography>{panettone.about}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Detalhes
          </Button>
          <Button size="small" color="primary">
            Editar
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default memo(PanettoneItem);
