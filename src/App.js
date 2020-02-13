import React from "react";
import "./App.css";
import QuoteGenerator from "./Components/QuoteGenerator";
import axios from "axios";
const sampleGenerator = {
  quote:
    "Every time I learn something, it pushes some old stuff out of my brain.",
  character: "Homer Simpson",
  image: "https://bit.ly/2Hiw51Y"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generator: sampleGenerator
    };
    this.getGenerator = this.getGenerator.bind(this);
  }

  getGenerator() {
    //send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      //Extract the DATA from the received response
      .then(response => response.data)
      // use this data to update the state
      .then(data => {
        this.setState({
          generator: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <QuoteGenerator generator={this.state.generator} />
        <button type="button" onClick={this.getGenerator}>
          New Quote
        </button>
      </div>
    );
  }
}

export default App;
