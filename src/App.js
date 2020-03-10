import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

// import ShowCard from "./showCard";

const tvShowURL = "https://api.tvmaze.com/shows";

class App extends Component {
  state = {
    shows: []
  };

  componentDidMount() {
    fetch(tvShowURL)
      .then(response => response.json())
      .then(shows => this.setState({ shows: shows }));
  }

  showCards = () => {
    return this.state.shows.map(show => {
      return (
        <div className="show-card">
          <img src={show.image.medium} />
          <h2>{show.name}</h2>
        </div>
      );
    });
  };
  render() {
    console.log(this.state.shows, "shows");
    return <div className="App">{this.showCards()}</div>;
  }
}

export default App;
