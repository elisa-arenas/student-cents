// FAFSA.js
import React from "react";
import { Card, Container, Grid, Image, Divider, Icon, Button } from "semantic-ui-react";

const tempImage = "https://i.pinimg.com/736x/26/76/3d/26763d481172f5dc599d151570b38ded--pixel-art-perler-beads.jpg"

function FAFSA() {
  return (
    <div className="App">
          <Container>
            <h1>FAFSA</h1>
          </Container>
      <div>
        <br/>
          <b>Text here! probs make bigger</b>
          <Container>
            <Grid divided centered className="Grid">
              <Grid.Column width={5}>
                  <h6>Purpose</h6>
                  <Image src={tempImage} as="a" size="medium" target="_blank"/>
                  <Divider/>
              </Grid.Column>
              <Grid.Column width={5}>
                  <h6>Why</h6>
                  <Image src={tempImage} as="a" target="_blank" size="medium" />
                  <Divider/>
                  <Button>This is how to make a button</Button>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    </div>
  );
}

export default FAFSA;
