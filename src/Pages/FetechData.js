import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles,makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const PostsData = [
  {
    id: "1",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "2",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "3",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "4",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "5",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "6",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "7",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "8",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "9",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "10",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "11",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    id: "12",
    title: "Prestige 3BHK",
    size: "3BHK - 1221 Sqft",
    image:
      "https://s3-alpha-sig.figma.com/img/bbd0/1773/364a301acff164e09fbb1348fe2ab883?Expires=1604275200&Signature=O3TuOoBxbtcnIHz3ZSg~nbkDxqQz0OIftz0aS61n9GknQNNHKuTqrphuCDNyhdlMyGuWgx2i3~wxeq2xaLJznND6-SRlIQiwE0f2J8AQc0N0lKJBvZeS5heib7y5qFDt6kWe56tIi5i1DzIO1MmbER22vqLhJFwZOWpZytLt3NG9HVUSuWQ4ojdrrm6PwgZ4IjhklJOm56feq6r97D2k4QBlRIP64UoHxu~nSB-mqrya1wV5XMEZEu8Q8Mzmn0WxpmA-EgjLrIw6I4mdXxgHp~HFuOz~w-0AHsdIZK8-3uDYr7815fM6FXwI44q8PbGq2-mrrtFEDx7XqlPJrTdLWg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

const useStyles = makeStyles((theme) => ({
  header: {
    color: "black",
    fontSize:'16px',
    textDecoration: "none",
    "&:hover":{
      color:'white'
    }
  }
}));

const ColorButton1 = withStyles((theme) => ({
  root: {
    color: "black",
    padding: "12px 50px",
    margin: "10px 0px",
    borderRadius: "10px",
    border: "1px solid #c1c1c1",
    backgroundColor: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#E1544E",
      color:'white'
    },
  },
}))(Button);
export default function FetechData() {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: "30px 0px",
      }}
    >
      {PostsData.map((e, i) => (
        <div>
          <img src={e.image} alt="plan-img" width="290" height="218" />
          <Typography style={{ fontWeight: "bold" }}>{e.title}</Typography>
          <Typography>{e.size}</Typography>
          <ColorButton1 variant="contained" color="primary">
            <Link to={`/myhometosearch/${i}`} className={classes.header}>Select this Floorplan</Link>
          </ColorButton1>
        </div>
      ))}
    </div>
  );
}
