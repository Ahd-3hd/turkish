import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import avatar1 from "../../assets/abdelkareem.jpg";
import avatar2 from "../../assets/Yunus.jpg";
import avatar3 from "../../assets/abudana.jpg";
const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: "auto",
    width: 150,
    height: 150
  }
});
const Features = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      justify="center"
      style={{
        textAlign: "center",
        color: "#555555",
        lineHeight: "1.5rem",
        letterSpacing: "1px"
      }}
    >
      <Grid item xs={12}>
        <h2>-{props.texts.OurTeam}-</h2>
        <hr style={{ width: "30%", opacity: 0.5 }} />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card style={{ margin: "1rem" }}>
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar1} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>{props.texts.TeamName1}</h3>
            <p>{props.texts.TeamParagraph1}</p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card style={{ margin: "1rem" }}>
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar2} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>{props.texts.TeamName2}</h3>
            <p>{props.texts.TeamParagraph2}</p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card style={{ margin: "1rem" }}>
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Avatar src={avatar3} className={classes.bigAvatar} />
            <h3 style={{ color: "#555555" }}>{props.texts.TeamName3}</h3>
            <p>{props.texts.TeamParagraph3}</p>
            <div>
              <Button>
                <FacebookIcon style={{ color: "#555555" }} />
              </Button>
              <Button>
                <TwitterIcon style={{ color: "#555555" }} />
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Features;
