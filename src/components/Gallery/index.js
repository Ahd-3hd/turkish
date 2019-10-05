import React from "react";
import GalleryItem from "../GalleryItem";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Filter from "../Filter";
import { Link } from "react-router-dom";
const Gallery = props => {
  return (
    <Container>
      <Grid container justify="center">
        <Grid item style={{ margin: "2rem", color: "#555555" }}>
          <h3>{props.title}</h3>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item style={{ width: "100%", marginBottom: "3rem" }}>
          <Filter />
        </Grid>
      </Grid>
      <Grid container justify="space-between" spacing={2}>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
        <Grid item xs={12} sm={3}>
          <GalleryItem />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button
          variant="contained"
          color="primary"
          style={{ background: "#5677AA", margin: "2rem" }}
        >
          <Link style={{ textDecoration: "none", color: "#fff" }} to="/gallery">
            More...
          </Link>
        </Button>
      </Grid>
    </Container>
  );
};

export default Gallery;
