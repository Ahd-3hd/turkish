import React from "react";
import Grid from "@material-ui/core/Grid";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import ApartmentIcon from "@material-ui/icons/Apartment";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
const Features = props => {
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      style={{
        textAlign: "center",
        color: "#555555",
        lineHeight: "1.5rem",
        letterSpacing: "1px",
        margin: "2rem 0"
      }}
    >
      <Grid item xs={12}>
        <h2>{props.title ? props.title : `-${props.texts.WhyUs}-`}</h2>
        <hr style={{ width: "30%", opacity: 0.5 }} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <AvTimerIcon style={{ fontSize: "5rem", marginBottom: "1.5rem" }} />
        <h2>{props.texts.FeaturesTitle1}</h2>
        <p style={{ padding: "15px" }}>{props.texts.FeaturesParagraph1}</p>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ApartmentIcon style={{ fontSize: "5rem", marginBottom: "2rem" }} />
        <h2>{props.texts.FeaturesTitle2}</h2>
        <p style={{ padding: "15px" }}>{props.texts.FeaturesParagraph2}</p>
      </Grid>
      <Grid item xs={12} sm={3}>
        <MonetizationOnIcon
          style={{ fontSize: "5rem", marginBottom: "2rem" }}
        />
        <h2>{props.texts.FeaturesTitle3}</h2>
        <p style={{ padding: "15px" }}>{props.texts.FeaturesParagraph3}</p>
      </Grid>
    </Grid>
  );
};

export default Features;
