import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initialize State in the Constructor
    this.state = {
      lat: 30,
      lon: 40,
    };
  }

  render() {
    // Geolocation API - Ask users to provide their location to web application
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return (
      <div>
        Latitude: {this.state.lat} Longitude: {this.state.lon}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
