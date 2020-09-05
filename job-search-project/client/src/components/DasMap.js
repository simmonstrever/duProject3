import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 39.8561,
         lng: 104.6737
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'https://maps.googleapis.com/maps/api/staticmap?center=Denver&key=AIzaSyCfZXy8pSLDzX7VugHTttsJh-GSosG9kJ0'
})(MapContainer);







