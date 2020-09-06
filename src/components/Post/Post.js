import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const { id, title, body } = props.post;

  let history = useHistory();

  const handleClick = (postId) => {
    history.push(`/post/${postId}`);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  Post No: {id}
                </Typography>
                <Typography gutterBottom variant="h5" component="h1">
                  <strong> {title}</strong>
                </Typography>
                <Typography wrap="nowrap" variant="body1" color="textSecondary" component="p">
                  {body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <p>
                <Link to={`/post/${id}`}>About: {id}</Link>
              </p> */}
              <Button onClick={() => handleClick(id)} size="medium" variant="outlined" color="primary">
                See More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
};

export default Post;
