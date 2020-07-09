import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize State in the Constructor
    this.state = {
      lat: null,
      lon: null,
    };

    // Geolocation API - Ask users to provide their location to web application
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // Update state with setState
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat} Longitude: {this.state.lon}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
