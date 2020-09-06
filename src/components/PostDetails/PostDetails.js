import React, { useEffect, useState } from "react";
import { Grid, CardActionArea, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";
import PostComments from "../PostComments/PostComments";

const PostDetails = () => {
  let { postId } = useParams();
  const [postInfo, setPostInfo] = useState({});
  const { title, body } = postInfo;
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostInfo(data));
  }, []);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  const postInfoStyle = {
    borderBottom: "1px solid lightgrey",
  };
  return (
    <div>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} style={postInfoStyle}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Post No: {postId}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                <strong>{title}</strong>
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p">
                {body}
              </Typography>
              <br />
              <BottomNavigation>
                <BottomNavigationAction label="Recents" icon={<ThumbUpIcon />} />
                <BottomNavigationAction label="Favorites" icon={<ChatBubbleOutlineIcon />} />
                <BottomNavigationAction label="Nearby" icon={<ShareIcon />} />
              </BottomNavigation>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item xs={3}></Grid>

        <Grid item xs={3}></Grid>
        <Grid item xs={6} style={postInfoStyle}>
          <h3>Comments:</h3>
          {comments.map((comment) => (
            <PostComments comment={comment}></PostComments>
          ))}
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

export default PostDetails;
