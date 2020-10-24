import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { red } from "@material-ui/core/colors";
import { Toolbar, Typography } from "@material-ui/core";
import AllPlans from "./AllPlans";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
  },
  input: {
    color: "black",
    borderRadius: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(red[500]),
    padding: "15px 20px",
    margin: "0px -30px",
    borderRadius: "12px",
    textTransform: "none",
    backgroundColor: "#E1544E",
    "&:hover": {
      backgroundColor: "#E1544E",
    },
  },
}))(Button);

const ColorButton1 = withStyles((theme) => ({
  root: {
    color: "black",
    padding: "12px 45px 14px 8px",
    borderRadius: "10px",
    border: "1px solid black",
    textTransform: "none",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
}))(Button);

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Toolbar>
          <Grid container style={{ borderBottom: "1px solid #c1c1c1" }}>
            <Grid
              item
              xs={12}
              sm={6}
              container
              style={{ margin: "40px 0px 20px" }}
            >
              <Grid xs={7}>
                <TextField
                  id="outlined-search"
                  label="Enter your Floorplan Name to Get Started"
                  type="search"
                  variant="outlined"
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
              <Grid xs={5}>
                <ColorButton
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                >
                  Search Floorplan
                </ColorButton>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              container
              style={{ margin: "40px 0px 0px" }}
            >
              <Grid xs={6}>
                <Typography
                  variant="h6"
                  component="h6"
                  style={{ marginTop: "-22px", fontSize: "15px" }}
                >
                  Floorplan Not Listed? Try below option Instead
                </Typography>
                <ColorButton1
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                >
                  Upload Floorplan
                </ColorButton1>
              </Grid>
              <Grid xs={6}>
                <ColorButton1
                  variant="contained"
                  color="primary"
                  className={classes.margin}
                >
                  Create a Room using Dimensions
                </ColorButton1>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
      <Toolbar>
        <AllPlans />
      </Toolbar>
    </>
  );
};

export default Home;
