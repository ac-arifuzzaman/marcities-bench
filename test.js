import MenuIcon from "@mui/icons-material/Menu";
import { Link, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "#fff",
      textDecoration: "none",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemMenue: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
  });

  const { navItem, navIcon, navItemMenue, navLogo } = useStyle();
  const [state, setState] = React.useState(false);

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };

  const list = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText>
            <Link to="/">Home</Link>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              marcities
            </Typography>
            <Box className={navItemMenue}>
              <NavLink className={navItem} to="/home">
                <Button sx={{ textTransform: "capitalize" }} color="inherit">
                  home
                </Button>
              </NavLink>
              <NavLink className={navItem} to="/service">
                <Button sx={{ textTransform: "capitalize" }} color="inherit">
                  service
                </Button>
              </NavLink>
              <NavLink className={navItem} to="/contuctus">
                <Button sx={{ textTransform: "capitalize" }} color="inherit">
                  contuct us
                </Button>
              </NavLink>
              <NavLink className={navItem} to="/login">
                <Button sx={{ textTransform: "capitalize" }} color="inherit">
                  Login
                </Button>
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;
