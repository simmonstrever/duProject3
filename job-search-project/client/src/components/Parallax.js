import React from 'react';
import { Parallax, Row, Container, Section, Button, TextInput } from 'react-materialize';
import image1 from "../assets/airport.png"
import 'materialize-css';


//think of making 3 seperate parallax components



const Layout = () => {


  return (

    <div>
      <Parallax
        image={<img alt="" src={image1} />}
        options={{
          responsiveThreshold: 0
        }}
      />
      <Container className=" content-center white">
        <Row className="center-align">
          <h2 className="center-text">Testing</h2>
          <Row>
            <TextInput id="TextInput-12" className="center" l={12}
              m={12}
              s={12}
              xl={12} placeholder="Enter airport city"/>
          </Row>
        </Row>
      </Container>

      <Parallax
        image={<img alt="" src="http://materializecss.com/images/parallax2.jpg" />}
        options={{
          responsiveThreshold: 0
        }}
      />
    </div>

  );
};

export default Layout;