// Scholarships.js 
import React from "react";
import { Card, Container, Grid, Image, Divider, Icon, Button } from "semantic-ui-react";

const tempImage = "https://th.bing.com/th/id/OIP.wmLy5qlrl49ZmNBK9C71cgHaHa?pid=ImgDet&rs=1";

function Scholarships() {
  return (
  <div className="body">
      <div className="scholarship-background">
          <Container>
            <h1 className="masthead-title text-white">Scholarships</h1>
          </Container>
      {/* </div> */}
      <Grid>
            <Grid.Row centered>
              <h1>shpeel</h1>
            </Grid.Row>
            <Grid.Row>
            <Grid.Column>
            <Divider horizontal><h2>Additional Resources</h2></Divider>
            </Grid.Column>
            </Grid.Row>
          <Card.Group itemsPerRow={4} centered doubling>
            <h1>merit based scholarships</h1>
            <h1>first generation scholarships</h1>
          </Card.Group>
      </Grid>
      </div>
    </div>
  );
}

export default Scholarships;
