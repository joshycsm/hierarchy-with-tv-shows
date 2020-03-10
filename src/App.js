import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import ShowCard from "./showCard";

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
      return <ShowCard key={show.id} show={show} />;
    });
  };
  render() {
    console.log(this.state.shows, "shows");
    return <div className="App">{this.showCards()}</div>;
  }
}

export default App;
