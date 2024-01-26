import React from "react";
import mediaImage from "../Assets/media.png";
import facebookImage from "../Assets/facebook.png";
import instagramImage from "../Assets/instagram.png";
import twitterImage from "../Assets/twitter.png";
import { Box, Card, Grid, CardContent, Typography } from "@mui/material";

const ImageBox = () => {
  return (
    <Box sx={{ marginLeft: "252px", width: "400px" }}>
      <Card
        sx={{
          width: "50%",
          marginLeft: "152px",
          borderRadius: 3,
          boxShadow: 6,
        }}
      >
        <Grid container direction="column">
          <Grid item>
          
            <img src={mediaImage} alt="media.png" style={{ width: "100%" }} />
          </Grid>
          <Grid item>
         
            <CardContent>
              <Typography variant="h6" component="div">
                John Doe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                CEO
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <img
                    src={facebookImage}
                    alt="Facebook"
                    style={{ width: "15px", height: "15px" }}
                  />
                </Grid>
                <Grid item>
                  <img
                    src={instagramImage}
                    alt="Instagram"
                    style={{ width: "15px", height: "15px" }}
                  />
                </Grid>
                <Grid item>
                  <img
                    src={twitterImage}
                    alt="Twitter"
                    style={{ width: "15px", height: "15px" }}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ImageBox;
