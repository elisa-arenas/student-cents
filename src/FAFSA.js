// FAFSA.js
import React, { useState } from "react";
import { Container, Grid, Button } from "semantic-ui-react";

const FAFSAImage = "https://bestcollegeaid.com/public/filez/wp-content/uploads/2020/01/FAFSA-LOGO.png";

function DropdownOption({ title, content, isOpen, onClick }) {
  return (
    <div>
      <h2 onClick={onClick}>
        {isOpen ? "▼" : "►"} {title}
      </h2>
      {isOpen && <p>{content}</p>}
    </div>
  );
}

function FAFSA() {
  const [showGrants, setShowGrants] = useState(false);
  const [showLoans, setShowLoans] = useState(false);
  const [showWorkStudy, setShowWorkStudy] = useState(false);

  const handleDropdownClick = (option) => {
    if (option === "Grants") {
      setShowGrants(!showGrants);
      setShowLoans(false);
      setShowWorkStudy(false);
    } else if (option === "Loans") {
      setShowLoans(!showLoans);
      setShowGrants(false);
      setShowWorkStudy(false);
    } else if (option === "WorkStudy") {
      setShowWorkStudy(!showWorkStudy);
      setShowGrants(false);
      setShowLoans(false);
    }
  };

  return (
    <div className="App">
      <h1 style={{ marginBottom: "0", padding: "0px" }}>FAFSA</h1>
      {/* style={{ maxWidth: "1200px", display: "flex", marginTop: "0", paddingTop: "0" }} */}
      <Container>
        <Grid divided centered stackable className="Grid" style={{ margin: "0", paddingTop: "0" }}>
          <Grid.Row columns={2} style={{ padding: "0 8px" }}>
            <Grid.Column style={{ padding: "0 8px" }}>
              <Button as="a" href="https://www.uopeople.edu/blog/what-is-fafsa/?utm_source=google&utm_medium=cpc&utm_campaign=ggl-display_pmax_us&utm_term=%7badid%7d&utm_content=&gad_source=1&gclid=Cj0KCQiA6vaqBhCbARIsACF9M6kmlji_-ed5GoJWGdPDES0IkE1Za6Axd-26CW52Fb6aPCTc4_wmOKkaAsH-EALw_wcB" target="_blank">
                <h2>What is<img src={FAFSAImage} alt="FAFSA" style={{ width: '200px', height: 'auto', verticalAlign: 'middle' }} />?</h2>
              </Button>
              <b>FAFSA is a form that assesses your financial needs which provides insight on your Estimated Family Contribution and offers a couple different funding options.</b>
              <hr style={{ borderTop: '1px solid #ddd' }} />

              <Button as="a" href="https://studentaid.gov/apply-for-aid/fafsa/filling-out" target="_blank">
                <h2>How to fill it out!</h2>
              </Button>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/9apxxQrx-WY"
                title="FAFSA Tutorial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <hr style={{ borderTop: '1px solid #ddd' }} />
               <Button as="a" href="https://studentaid.gov/apply-for-aid/fafsa/fafsa-deadlines" target="_blank">
                 <h2>When to do it?</h2>
               </Button>
               <b>For the 2023-2024 Academic Year, the FAFSA form must be submitted by 11:59 p.m. CT on June 30, 2024.</b>             
            
            </Grid.Column>
            </Grid.Row>

            <Grid.Column style={{ padding: "0 9px" }}>
              <Button as="a" href="https://studentaid.gov/understand-aid/types" target="_blank">
                <h2>Types of Aid</h2>
              </Button>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/Pn4OECMTh5w"
                title="Types of Aid"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <hr style={{ borderTop: '1px solid #ddd' }} />
              <DropdownOption
                title="Grants"
                content="Grants are a form of financial aid that do not need to be repaid."
                isOpen={showGrants}
                onClick={() => handleDropdownClick("Grants")}
              />
              <DropdownOption
                title="Loans"
                content="Loans are money you borrow but must be paid back with interest."
                isOpen={showLoans}
                onClick={() => handleDropdownClick("Loans")}
              />
              <DropdownOption
                title="Work-Study"
                content="The Work-Study program allows students to work part-time based on the level of their financial need."
                isOpen={showWorkStudy}
                onClick={() => handleDropdownClick("WorkStudy")}
              />
              <hr style={{ borderTop: '1px solid #ddd'}} />
               <Button as="a" href="https://studentaid.gov/data-center/student/application-volume/faq" target="_blank">
                 <h2>FAFSA FAQ</h2>
               </Button>
               <b>Have more questions about filing out your FAFSA? Click the link above!</b>             

            </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default FAFSA;
