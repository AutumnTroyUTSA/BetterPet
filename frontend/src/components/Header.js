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

  const [searchVal, setSearchVal] = useState("");

  const handleInput = (e) => {
    console.log("handleInput")
    setSearchVal(e.target.value);
    filterResults()
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };


      useEffect(() => {
        axios
          .get("items/all")
          .then((response) => {
            setProducts(response.data);
            //console.log(products)
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      async function filterResults() {
        console.log('filteredResults')
        const searchResults = products.filter((prod)=> prod.name == searchVal)
        if (searchResults.length ){
          console.log(searchResults)
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
                      <li key={product.id} className="list-item">
                        <a >{product.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        <QuiltedImage />
        {setSearch && (
          <ul>
            {results.map((el, i) => (
              <li key={i}>{el.name}</li>
            ))}
          </ul>
        )}
      </Box>
      <Outlet />
    </>
  );
}
