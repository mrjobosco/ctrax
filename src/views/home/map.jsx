import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends Component {

  state = {
    viewport: {
      width: window.innerWidth,
      height: 400,
      latitude: 40.7128,
      longitude: 74.0060,
      zoom: 8
    }
  };
  TOKEN = 'pk.eyJ1IjoibXJqb29zY28iLCJhIjoiY2o5cWpmYXA1NjQ0dDJ3cW1zdG9iZTZkdSJ9.usN4xmhvpr53WvyxTk3vjA';
  render() {
    return <ReactMapGL mapboxApiAccessToken={this.TOKEN} {...this.state.viewport} onViewportChange={(viewport) => this.setState({viewport})}/>
    ;
  }
}