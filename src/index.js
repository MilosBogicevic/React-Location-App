import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./components/Spinner";

class App extends React.Component {
  // Initialize state
  state = { lat: null, lon: null, errorMessage: "" };

  componentDidMount() {
    // Geolocation API - Ask users to provide their location to web application
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        // Update state with setState
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      // Update state with error message
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          Latitude: {this.state.lat} <br /> Longitude: {this.state.lon}
        </div>
      );
    }
    return <Spinner />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
