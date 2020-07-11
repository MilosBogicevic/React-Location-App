import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize State in the Constructor
    this.state = {
      lat: null,
      lon: null,
      errorMessage: "",
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
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat} <br />
        Longitude: {this.state.lon} <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
