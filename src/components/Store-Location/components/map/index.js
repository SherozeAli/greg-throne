import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div></div>

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.530895,
      lng: -119.814972
    },
    zoom: 11
  }

  render() {
    return (
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCixT0iG2HZkTOLWBd2EKAWEpFK27dn8P0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.530895}
            lng={-119.814972}
            text='My Marker'
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap
