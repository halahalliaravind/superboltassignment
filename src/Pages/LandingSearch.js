import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

import "./watch.css";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ColorButton1 = withStyles((theme) => ({
  root: {
    color: "#E1544E",
    padding: "9px 93px",
    margin: "5px 0px",
    borderRadius: "8px",
    border: "1px solid #E1544E",
    backgroundColor: "white",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "white",
      color: "#E1544E",
    },
  },
}))(Button);

const ColorButton2 = withStyles((theme) => ({
  root: {
    color: "white",
    padding: "0px 40px",
    margin: "0px",
    borderRadius: "8px",
    border: "1px solid #B3B3B3",
    backgroundColor: "#B3B3B3",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#B3B3B3",
      color: "white",
    },
  },
}))(Button);

const LandingSearch = (props) => {
  console.log(props);
//   const classes = useStyles();
  const { id } = useParams();
  return (
    <>
      <div>
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" to="/" onClick={handleClick}>
              SuperBolter
            </Link>
            <Link
              color="inherit"
              to="/"
              onClick={handleClick}
            >
              My Home
            </Link>
            <Link
              color="textPrimary"
              to="/components/breadcrumbs/"
              onClick={handleClick}
              aria-current="page"
            >
              Prestige White {id} BHK
            </Link>
          </Breadcrumbs>
        </Toolbar>
      </div>
      <div>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} style={{ padding: "5px 12px" }}>
              <div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/68dc/24e8/b9194328817d5e5f1d7441f1b31d4e7e?Expires=1604275200&Signature=MRP0kPzCMJuk~sScgg3XXmeXmVWMb2jdPcoeKmfIhgTuTLKSXdJ0x6aB7yx-0WuBFj5XVMCVU4NItWu9TFKvolR05MSjZxo7JKSJ8H3Ko6chWV2ROocNx3GEFnXWuh-sUfJmKeVoTi7Oaj2hZ3YGKX4YgUzhsXiOcOJl0WEZdK-KffanL6jFNvE2ssv7qNcdlgBRSa12rapglTqmnaDopGGn6io7oW9HsGm3O~rPHVfdQAgKE714u3QREsyx0ld2ae7KSEi5DF0HMPnMMA5YWXg-ISD5rSaQKP6XRGC4rwPTFqAhvUc~p9nIJL6PpIybYXCzxFfpoQIFxbiL-8~6Gg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  width="280px"
                  height="280px"
                  alt="selected-img"
                />
              </div>
              <Typography style={{ fontWeight: "bold", fontSize: "25px" }}>
                My Bengaluru House
              </Typography>
              <Typography style={{ fontSize: "16px", fontWeight: "bold" }}>
                Prestige 4 BHK - 3100 Sqft
              </Typography>
              <Typography style={{ fontSize: "12px", color: "#c1c1c1" }}>
                Location : 19, Brunton Road, Ashok Nagar,
              </Typography>
              <Typography style={{ fontSize: "12px", color: "#c1c1c1" }}>
                Bengaluru, Karnataka, India.
              </Typography>
              <Alert
                severity="error"
                style={{
                  maxWidth: "260px",
                  maxHeight: "30px",
                  backgroundColor: "#FCF7ED",
                  color: "#E6AB4A",
                  boxShadow: "none",
                  fontSize: "9px",
                  textAlign: "inherit",
                  alignItems: "center",
                }}
              >
                To generate a full fledge precise home it requires a time period
                between 12-24 Hours.
              </Alert>
              <ColorButton1 variant="contained" color="primary">
                View Instant 3D
              </ColorButton1>
              <br />
              <ColorButton2 variant="contained" color="primary">
                Design your Home <br />
                [We will notify you within 24Hrs]
              </ColorButton2>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="clock">
                <div className="hour"></div>
                <div className="min"></div>
                <div className="sec"></div>
              </div>
              <Typography variant="h5" component="h5" className="textroom">
                Rooms will Appear in this Section
              </Typography>
              <Typography className="subtextroom">
                We will notify via SMS on your registered mobile number once the
                one time process is completed.
              </Typography>
              <Typography className="box-content">
                <p>Instead you can use Instant 3D of your Home to</p>
                <li>-See Model of your Home.</li>
                <li>-Try Products.</li>
                <li>-Try Paints on Wall.</li>
              </Typography>
              <Alert
                severity="error"
                fullwidth
                style={{
                  backgroundColor: "#E6AB4A",
                  borderRadius: "8px",
                  color: "white",
                  boxShadow: "none",
                  fontSize: "11px",
                  textAlign: "inherit",
                  alignItems: "center",
                  marginTop:'160px'
                }}
              >
                To generate a full fledge precise home it requires a time period
                between 12-24 Hours. Instead View Instant 3D
              </Alert>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
    </>
  );
};

export default LandingSearch;
