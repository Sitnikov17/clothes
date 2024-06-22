import "./AppBars.css";

import { useState, useContext } from "react";
import { Context } from "../Router/Router";

import img from "../../img";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";

export default function AppBars() {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" || <AppBarsMain />}
      {location.pathname === "/" || <AppBarsMini />}
    </>
  );
}

function AppBarsMain() {
  const [background, setBackground] = useState("transparent");
  const [color, setColor] = useState("white");

  const gender = useContext(Context).gender;
  const onChange = useContext(Context).toggle;

  let borderMen = "";
  let borderWomen = "";
  if (gender === "men") {
    borderMen = "3px solid " + color;
    borderWomen = "0px";
  } else {
    borderMen = "0px";
    borderWomen = "3px solid " + color;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setBackground("inherit");
      setColor("black");
    } else {
      setBackground("transparent");
      setColor("white");
    }
  });

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color={background}
          className="app"
          sx={{ boxShadow: "none", width: "100vw" }}
        >
          <Toolbar fontSize="large">
            <TemporaryDrawer
              data={color}
              gender={gender}
              onChange={onChange}
              sx={{ boxShadow: "none", color: color }}
            />
            <div className="appBarsDecrease">
              <Button
                onClick={() => onChange()}
                sx={{
                  color: color,
                  borderBottom: borderMen,
                  borderRadius: "0px",
                }}
              >
                Мужчины
              </Button>
              <Button
                onClick={() => onChange()}
                sx={{
                  color: color,
                  borderBottom: borderWomen,
                  borderRadius: "0px",
                }}
              >
                Женщины
              </Button>
            </div>

            <Button
              className="clothes"
              style={{
                left: "45%",
                transform: "translate(-320%, 0%)",
              }}
            >
              <a href="/clothes/" style={{ color: color }}>
                Сlothes
              </a>
            </Button>

            <Button sx={{ ml: "auto" }}>
              <a href="/clothes/basket" style={{ color: color, margin: "0" }}>
                Корзина
              </a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

function AppBarsMini() {
  const context = useContext(Context);
  const gender = context.gender;
  const onChange = context.toggle;

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color="inherit"
          className="app"
          sx={{ width: "100vw" }}
        >
          <Toolbar fontSize="large">
            <TemporaryDrawer
              data="inherit"
              gender={gender}
              onChange={onChange}
            />

            <Button
              sx={{
                left: "55%",
                transform: "translate(-225%, 0%)",
              }}
            >
              <a href="/clothes">Сlothes</a>
            </Button>

            <Button sx={{ ml: "auto" }}>
              <a href="/clothes/basket">Корзина</a>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}

// Выдвижное меню

function TemporaryDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  let arr = img.filter((item) => {
    return item.gender === props.gender;
  });

  let borderMen = "";
  let borderWomen = "";
  if (props.gender === "men") {
    borderMen = "3px solid black";
    borderWomen = "0px";
  } else {
    borderMen = "0px";
    borderWomen = "3px solid ";
  }

  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation">
      <div className="buttonBlock">
        <CloseIcon onClick={toggleDrawer(false)} className="closeIcon" />
        <Button
          onClick={() => props.onChange()}
          style={{
            color: "inherit",
            borderBottom: borderMen,
            borderRadius: "0px",
          }}
          className="active"
        >
          МУЖЧИНЫ
        </Button>
        <Button
          onClick={() => props.onChange()}
          style={{
            color: "inherit",
            borderBottom: borderWomen,
            borderRadius: "0px",
          }}
          className="active"
        >
          ЖЕНЩИНЫ
        </Button>
      </div>

      <Divider sx={{ display: "flex" }} />
      <div className="divider">
        <div className="dividerLeft">
          <List>
            {arr.map((item, index) => (
              <ListItem key={item.name} disablePadding>
                <a
                  href={
                    "/clothes/category/" + props.gender + "/" + item.category
                  }
                  key={index}
                  className=""
                >
                  <ListItemText primary={item.name} className="listItemText" />
                </a>
              </ListItem>
            ))}
          </List>
        </div>
        <div className="dividerRight">
          <img
            src={require(
              props.gender === "men"
                ? "../../img/men.jpg"
                : "../../img/women.jpg"
            )}
            alt="/"
          />
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="error"
        aria-label="menu"
        sx={{ mr: 2, color: props.data }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
