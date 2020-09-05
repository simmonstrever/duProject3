import React from 'react';
import 'materialize-css';
import { Parallax, Row, Container,  Button, TextInput} from 'react-materialize';
import MySearch from './MySearch';
import image1 from "../assets/airport.png"



//think of making 3 seperate parallax components



const Layout = ({ searchTerm, handleInputSubmit, handleInputChange}) => {

 



 

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