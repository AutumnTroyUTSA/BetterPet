import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Products from "../json/dogProducts.json";

const Checkout = () => {
  return (
    <>
      <Typography style={{ float: "left" }}>Checkout:</Typography>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 0,
          pb: 6,
        }}
      ></Box>
      <br />
      <br />
      <br />
      <br />
      <Typography sx={{ textAlign: "center" }}>Item Total: $</Typography>
      <Typography sx={{ textAlign: "center" }}>Order Tax: $</Typography>
      <br />
      <Typography sx={{ textAlign: "center" }}>Order Total: $</Typography>
      <br />
      <br />
      <Button
        variant="contained"
        sx={{ float: "right", marginRight: 15, marginBottom: 2 }}
      >
        Finish & Pay
      </Button>
    </>
  );
};

export default Checkout;