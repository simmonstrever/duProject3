import React from 'react';
import {Parallax, Row} from 'react-materialize';
import 'materialize-css';





const Layout = () => {
    return (
      <Row>
      <Parallax
        image={<img alt="" src="http://materializecss.com/images/parallax1.jpg"/>}
        options={{
        responsiveThreshold: 0
        }}
      />
      <Row className="section white">
        <Row className="row container">
          <h2 className="header">
            Parallax
          </h2>
          <p className="grey-text text-darken-3 lighten-3">
            Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.
          </p>
        </Row>
      </Row>
      <Parallax
        image={<img alt="" src="http://materializecss.com/images/parallax2.jpg"/>}
        options={{
          responsiveThreshold: 0
        }}
      />
    </Row>
      
    );
};

export default Layout;