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
import Products from '../json/dogProducts.json'
import axios from "axios";


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Dog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      axios
        .get("items/category/Dog")
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

        async function addCartHandler(event) {
         let id = event.target.id;
         await axios.post("cart/add/"+id, {id: id, name: event.target.name, price: event.target.price, description: event.target.description, category: event.target.category, imagePath: event.target.imagePath}).then((response) =>{
         console.log(response.data)})
        }

  return (
    <>
      <Typography style={{ float: "left" }}>Dog Products:</Typography>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 0,
            pb: 6,
          }}
        ></Box>
        <Container maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={8}>
            {posts.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "6.25%",
                    }}
                    image={item.picture}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.name}
                    </Typography>
                    <Typography>{item.description}</Typography>
                    <Typography
                      gutterBottom
                      variant="h8"
                      component="h2"
                      style={{ float: "right"}}
                    >
                      ${item.price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button size="small" id={item.id} onClick={addCartHandler}>
                      Add TO Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Dog;
