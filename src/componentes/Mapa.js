import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './mapa.css';

function MapContainer(props) {
    return (
        <div className="mapa">
        <Map
                google={props.google}
                className={"map"}
                zoom={15}
                initialCenter={{ lat: -19.7884195,lng: -44.2032119}}
                containerStyle={{ height: 200, position: 'relative'}}
            >
        </Map>
        </div>
            
    )
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDUiAr6qFjFlIGkytlL63zgX3a3TaAeB_o")
})(MapContainer)