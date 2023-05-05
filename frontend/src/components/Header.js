import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import QuiltedImage from "./QuiltedImage";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

const pages = ["Dog", "Cat", "Small_Pet", "Account", "Cart"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {

    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const [search, setSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [results, setResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();

  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    setSearchVal(e.target.value);
    filterResults()
  };

    const [open, setOpen] = useState(false);

    const handleClickOpen = (e) => {
      setOpen(true);
      const arr = e.target.value.split(" ", 3)
      console.log(arr);

      setSelectedProduct(e.target.value)
      console.log(selectedProduct)
    };

    const handleClose = () => {
      setOpen(false);
    };


      useEffect(() => {
        axios
          .get("items/all")
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      async function filterResults() {
        const searchResults = products.filter((prod)=> prod.name == searchVal)
        if (searchResults.length ){

          setResults(searchResults);
          setSearch(true)
        }
        else {
          return null;
        }
      }


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar sx={{ justifyContent: "space-around" }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {pages.map((page) => (
              <MenuItem key={page}>
                <Link to={page}>{page}</Link>
              </MenuItem>
            ))}

            <div className="container">
              <div className="input-wrap">
                <i className="fas fa-search"></i>
                <label for="product-search" id="input-label">
                  Search:
                </label>
                <input
                  onChange={handleInput}
                  value={searchVal}
                  type="text"
                  name="product-search"
                  id="product-search"
                  placeholder="Search Products"
                />
              </div>
              <div className="results-wrap">
                <ul>
                  {results.map((product) => {
                    return (
                      <Button
                        value={[
                          product.id + " ",
                          product.name,
                          product.description,
                          product.picture,
                        ]}
                        key={product.id}
                        sx={{ color: "white", backgroundColor: "gray" }}
                        onClick={handleClickOpen}
                      >
                        {product.name}
                      </Button>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <QuiltedImage />
        {open && (
          <Dialog open={open} onClose={handleClose}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "6.25%",
                }}
                image={selectedProduct.picture}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Prong Collar
                </Typography>
                <Typography>
                  Training collar for aggressive pulling dogs.
                </Typography>
                <Typography
                  gutterBottom
                  variant="h8"
                  component="h2"
                  style={{ float: "right" }}
                >
                  $21
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small" id={selectedProduct.id}>
                  Add TO Cart
                </Button>
              </CardActions>
            </Card>
          </Dialog>
        )}
      </Box>
      <Outlet />
    </>
  );
}
