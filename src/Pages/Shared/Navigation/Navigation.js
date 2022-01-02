import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: "white",
      textDecoration: "none",
    },
    iconButton: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
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

  const { navItem, iconButton, navItemContainer, navLogo } = useStyle();
  const [state, setState] = useState(false);

  const list = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button>
          <ListItemText>
            <NavLink to="/">Home</NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <NavLink to="/service">Service</NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <NavLink to="/contuctus">Contuct Us</NavLink>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
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
              className={iconButton}
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
              News
            </Typography>
            <Box className={navItemContainer}>
              <NavLink className={navItem} to="/home">
                <Button sx={{ textTransform: "capitalize" }} color="inherit">
                  Home
                </Button>
              </NavLink>
              <NavLink className={navItem} to="/service">
                <Button sx={{ textTransform: "capitalize" }} color="inherit">
                  Service
                </Button>
              </NavLink>
              <NavLink className={navItem} to="/contuctus">
                <Button sx={{ textTransform: "capitalize" }} color="inherit">
                  Contuct us
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
