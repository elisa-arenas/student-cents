// CreditCards.js
import React from "react";
import { Card, Container, Grid, Image, Divider, Icon, Button } from "semantic-ui-react";

const ccImage = "https://cdn2.iconfinder.com/data/icons/shop-retail-cartoon/512/a2079-512.png"


function CreditCards() {
  return (
    <div className="App">
    <Container>
      <h1 style={{ marginBottom: "0" }}>Credit Cards</h1>
      <b style={{ display: "block", padding: "40px" }}>
      It's important to start building credit as a student. 
      Credit cards help us learn how to navigate our finances and set us up for the future, 
      whether it's to buy a car, a house, or other significant investments.
      </b>
    </Container>
    <Container textAlign="center">
      <Grid columns={3} divided centered className="cc-grid">
        <Grid.Column>
        <Button as='a' href='https://www.bankofamerica.com/credit-cards/products/student-cash-back-credit-card/' target="_blank">
          <Image src={require('../src/images/bofa.png')} size="small" centered style={{ width: '112%', height: '112%' }} />
        </Button>
        </Grid.Column>
        <Grid.Column>
        <Image src={ccImage} size="small" centered style={{ width: '90%', height: '90%' }}/>
        </Grid.Column>
        <Grid.Column>
        <Button as='a' href='https://www.capitalone.com/credit-cards/preapprove/student/?n=1&external_id=WWW_XXXXX_ZZZ_ONL-SE_BBBBB_T_SEM2_ZZZZ_c_ZZ__kenshoo_clickid__77103421862406_693607&target_id=kwd-77103465099301:loc-190&oC=CO5ed2SUs1&msclkid=bcbb1d41e23e111c3c5d781f330fcd35' target="_blank">
          <Image src={require('../src/images/capitalOne.png')} size="small" centered style={{ width: '112%', height: '112%' }}/>
        </Button>
        </Grid.Column>
      </Grid>
    </Container>

  </div>
  );
}

export default CreditCards;