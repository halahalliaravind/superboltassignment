import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ListIcon from "@material-ui/icons/List";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MoreIcon from "@material-ui/icons/MoreVert";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo:{
    width: '48px',
    height: '48px'
  },
  navbar: {
    color: "black",
    backgroundColor: "white",
    boxShadow: "none",
  },
  header: {
    margin: "20px",
    border: "0px solid rgb(236, 236, 236)",
    color: "black",
    textDecoration: "none",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Sep = () => (
  <span
    style={{ margin: "20px", border: "0px solid #ECECEC", color: "#c1c1c1" }}
  >
    {" "}
    |{" "}
  </span>
);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <p>Rooms</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <ListItemAvatar>
          <Avatar
            alt="Profile Picture"
            src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
          />
        </ListItemAvatar>
        <p>My Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/56de/2de5/0a17276445d5b238576c5a7ef405f1b2?Expires=1604275200&Signature=LraTyaYLdjcTVoFCNactwCoxZektGX2R4oqPGM6ErCeXpeQHMyFqn6foS~5pLiUTboReKMd0HQ6F1zqL6Mmi4YKkmkFXCUzL3rPAS7w7IKO0nJGy8EBegbhBT8QCBOwN6IK~ysiEM3rKFt8YVODRPo5zFIrjpwC1Ua04e2LeyQKB8cLRUWrZnDCsfnOcoRJ9F8Dk06eLp~KTfNKqXkS-E3XZu~k9AUKW9kEHVKPoWdVSoWzpmCp8DNJHGscAdcRBxmPVUizmJo2RxissS6BnHd~GA7ppbBhKuWPCnTz6x4oqzphnkk9v9mo8o8I10NJqKpJ8D91o-XqtBbHktuBRrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              className={classes.logo}
              alt="logo"
            />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to="/" className={classes.header}>
              Browse Room Designs
            </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/howto" className={classes.header}>
              How to
            </Link>
            <ArrowDropDownIcon style={{ margin: "20px 0px 0px -25px" }} />
            <Sep />
            <Link to="/myhometosearch" className={classes.header}>
              MyHome
            </Link>{" "}
            <Sep />
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
            <Sep />
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <ListIcon />
              <Avatar
                alt="Profile Picture"
                src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
              />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
