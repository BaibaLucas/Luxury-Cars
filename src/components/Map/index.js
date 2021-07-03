import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import mapStyles from '../Map/GoogleMapStyles';

const MyMap = () => {

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 48.85795, lng: 2.27148 }}
    options={{ styles : mapStyles }}
  >
    <Marker
      position={{ lat: 48.85795, lng: 2.27148 }}
    />
  </GoogleMap>
));

return (
  <MapWithAMarker
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBER_565A073ZA_-bGvezE-v3I4yxtzE9Y"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
};


export default MyMap;
