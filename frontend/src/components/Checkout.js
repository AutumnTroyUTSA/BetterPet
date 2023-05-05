import { useState, useEffect } from "react";
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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Checkout = () => {

      const [posts, setPosts] = useState([]);
      const [total, setTotal] = useState([0]);
      const [tax, setTax] = useState([0]);
      const [order, setOrder] = useState([0]);
      const [state, setState] = useState(false);



      useEffect(() => {
        let tempTotal = 0;
        axios
          .get("items/category/Cat")
          .then((response) => {
            response.data.forEach((entry) => {
              tempTotal += entry.price;
            });
            setPosts(response.data);
            setTax(tempTotal * .07)
            setTotal(tempTotal)
            setOrder(tempTotal + tax);
            setOrder((tax+tempTotal).toFixed(2))
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      
      
        async function checkoutHandler(event) {
          setState(true)
        }

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
      <Container maxWidth="sm">
        {state === true && (
          <Alert severity="success">
            Your order has been completed!
          </Alert>
        )}
        {state === false && (
          <TableContainer component={Paper} sx={{ maxWidth: 300 }}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold" }}>Item Name</TableCell>
                  <TableCell sx={{ fontWeight: "bold" }} align="right">
                    Cost
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {posts.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">${row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <hr></hr>
            <Typography sx={{ textAlign: "right" }}>
              Item Total: ${total}
            </Typography>
            <Typography sx={{ textAlign: "right" }}>
              Order Tax: ${tax}
            </Typography>
            <br />
            <Typography sx={{ textAlign: "right" }}>
              Order Total: ${order}
            </Typography>
          </TableContainer>
        )}
        <br />
        <br />
        {state === false && (
          <Button
            variant="contained"
            sx={{ float: "right", marginRight: 15, marginBottom: 2 }}
            onClick={checkoutHandler}
          >
            Finish & Pay
          </Button>
        )}
      </Container>
    </>
  );
};

export default Checkout;
