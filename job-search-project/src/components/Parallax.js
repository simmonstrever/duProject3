import React from 'react';
import { Parallax, Row, Container, Section, Navbar, NavItem, Icon } from 'react-materialize';
import image1 from "../assets/airport.png"
import 'materialize-css';


//think of making 3 seperate parallax components



const Layout = () => {


  return (
    
    <Row>
      <Parallax
        image={<img alt="" src={image1} />}
        options={{
          responsiveThreshold: 0
        }}
      />
      <Section className="section white">
        <Container>
          <Navbar
            alignLinks="right"
            brand={<p>Logo</p>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
            search
          >
            <NavItem href="">
              Getting started
            </NavItem>
            <NavItem href="components.html">
              Components
            </NavItem>
          </Navbar>
        </Container>
      </Section>
      <Parallax
        image={<img alt="" src="http://materializecss.com/images/parallax2.jpg" />}
        options={{
          responsiveThreshold: 0
        }}
      />
    </Row>
        
  );
};

export default Layout;