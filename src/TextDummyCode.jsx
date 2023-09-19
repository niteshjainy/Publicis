import React from "react";

class TextDummyCode extends React.Component {
  state = {
    counter: 0,
  };
  componentDidMount() {
    const intervalId = setTimeout(this.updateState, 2000);
    this.setState({ intervalId: intervalId });
    this.counter.addEventListener("click", this.updateState);
  }
  componentWillUnmount() {
    this.counter.removeEventListener("click", this.updateState);
    clearTimeout(this.state.intervalId);
  }
  updateState = (event) => {
    console.log("= = = = = = = = = = = =");
    console.log("EVENT:", event ? event.type : "timer");
    console.log("Pre-setState:", this.state.counter);
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("Post-setState:", this.state.counter);
  };
  render() {
    return (
      <div className="App">
        <span
          onMouseDown={this.updateState}
          ref={(elem) => (this.counter = elem)}
        >
          Counter at {this.state.counter}
        </span>
      </div>
    );
  }
}

export default TextDummyCode;
