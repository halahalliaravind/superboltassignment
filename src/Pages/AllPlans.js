import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import FetechData from "./FetechData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: "0px 10px 0 0",
    backgroundColor: "white",
    textTransform: "none",
    border: "1px solid #c1c1c1",
    borderRadius: "8px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AllPlans = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              component="h6"
              style={{
                marginTop: "30px",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Found 4 Floorplans
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ padding: "0px 12px" }}>
            <Button
              variant="contained"
              size="small"
              color="white"
              className={classes.margin}
            >
              BHK
            </Button>
            <Button
              variant="contained"
              size="small"
              color="white"
              className={classes.margin}
            >
              City
            </Button>
            <Button
              variant="contained"
              size="small"
              color="white"
              className={classes.margin}
            >
              Builder
            </Button>
            <Button
              variant="contained"
              size="small"
              color="white"
              className={classes.margin}
            >
              Property Type
            </Button>
          </Grid>
        </Grid>
        <Grid>
        <FetechData />
        </Grid>
      </div>
     
    </>
  );
};

export default AllPlans;
