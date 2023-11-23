// Scholarships.js 
import React from "react";
import { Card, Container, Grid, Image, Divider, Icon, Button, List } from "semantic-ui-react";

const tempImage = "https://th.bing.com/th/id/OIP.wmLy5qlrl49ZmNBK9C71cgHaHa?pid=ImgDet&rs=1";

function Scholarships() {
  return (
  <div className="App body html">
    <Container style={{ maxWidth: "1200px" }}>
      <h1>Scholarships</h1>
      <Grid stackable columns={2} divided centered className="scholarship-grid">
        <Grid.Column className="scholarship-column scholarship-container">
          <h2>Merit-based scholarships</h2>
          <p>For students with high academic achievment.</p>
            <Divider/>
            <List style={{ fontSize: "1m" }}>
              <List.Item>
                <Button as='a' href='https://www.nationalmerit.org/s/1758/interior.aspx?sid=1758&gid=2&pgid=1879' target="_blank">
                  National Merit Scholarship Program
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://www.floridabrightfutures.gov/' target="_blank">
                  Florida Bright Futures Scholarship
                </Button>
              </List.Item>
              {/* <List.Item>
                <Button as='a' href='https://www.nitrocollege.com/scholarships/merit-based' target="_blank">
                  Nitro Scholarship Search Engine
                </Button>
              </List.Item> */}
              <List.Item>
                <Button as='a' href='https://www.coca-colascholarsfoundation.org/' target="_blank">
                  Coca-Cola Scholars Foundation
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://www.bryancameroneducationfoundation.org/scholarship' target="_blank">
                  Cameron Impact Scholarship 
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://www.hsf.net/scholarship' target="_blank">
                  Hispanic Scholarship Fund
                </Button>
              </List.Item>
            </List>
        </Grid.Column>
        <Grid.Column className="scholarship-column scholarship-container">
          <h2>First generation scholarships</h2>
          <p>For students who are the first in their family to attend college.</p>
          <List style={{ fontSize: "1m" }}>
              <List.Item>
                <Button as='a' href='https://scholarships360.org/scholarships/first-generation-college-student-scholarships/' target="_blank">
                  Scholarships360 Search Engine
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://www.tmcf.org/students-alumni/scholarship/2023-2024-tmcf-walmart-foundation-hbcu-first-generation-scholarship/' target="_blank">
                  TMCF and Walmart Foundation HBCU Scholarship
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://www.floridastudentfinancialaidsg.org/PDF/factsheets/FGMG.pdf' target="_blank">
                  Florida First Generation Matching Program
                </Button>
              </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column className="scholarship-column scholarship-container">
          <h2>International student scholarships</h2>
          <p>For students who are not U.S. citizens.</p>
          <List style={{ fontSize: "1m" }}>
              <List.Item>
                <Button as='a' href='https://www.mpowerfinancing.com/scholarships/global-citizen' target="_blank">
                  Global Citizen Scholarship
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://www.internationalscholarships.com/scholarships/2257/Global_Excellence_Scholarship' target="_blank">
                  Global Excellence Scholarship
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://brucekleescholarship.com/' target="_blank">
                  Bruce K. Lee Scholarship
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://www.iefa.org/' target="_blank">
                  International Scholarship Search Engine
                </Button>
              </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column className="scholarship-column scholarship-container">
          <h2>Need-based scholarships</h2>
          <p>For students coming from a low-income household.</p>
           <List style={{ fontSize: "1m" }}>
              <List.Item>
                <Button as='a' href='https://www.thegatesscholarship.org/scholarship' target="_blank">
                  The Gates Scholarship
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://greenhousescholars.org/our-scholars/become-a-scholar/' target="_blank">
                The Greenhouse Scholars Program
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://uncf.org/programs/fidelity-scholars-program?gclsrc=aw.ds&gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6nZjEb-WGaZHhYrByd6Rgcpw13U0rF7t_kVmaV1oegdcbxu64DVq-4aAu0JEALw_wcB' target="_blank">
                  Fidelity Scholars Program
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://burgerking.scholarsapply.org/' target="_blank">
                  Burger King Foundation
                </Button>
              </List.Item>
              <List.Item>
                <Button as='a' href='https://scholarships360.org/scholarships/need-based-scholarships/' target="_blank">
                  Scholarship360 Search Engine
                </Button>
              </List.Item>
            </List>
        </Grid.Column>
      </Grid>
    </Container>
  </div>
  );
}

export default Scholarships;
