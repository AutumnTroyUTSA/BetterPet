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
import Products from '../json/dogProducts.json'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Dog = () => {
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
            {Products.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position:'relative',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "6.25%",
                    }}
                    image={card.picture}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.desc}
                    </Typography>
                    <Typography gutterBottom variant="h8" component="h2" sx={{position:'absolute',bottom:20, right:80}}>
                      ${card.price}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{justifyContent:"center"}}>
                    <Button size="small">Add TO Cart</Button>
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
