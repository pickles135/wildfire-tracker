import dotenv from 'dotenv';
import GoogleMapReact from 'google-map-react';

const API_KEY = process.env.API_KEY;

const Map = ({ center, zoom }) => {
    return (
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={ center }
          defaultZoom={ zoom }
        >
        
        </GoogleMapReact>
      </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265, 
        lng: -122.8756,
    },
    zoom: 6
}

export default Map
