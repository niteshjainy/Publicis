import React from "react";

const Connector = (Func, url) => {
  return class extends React.Component {
    state = {
      data: [],
    };
    componentDidMount() {
      if (url) {
        fetch(url)
          .then((e) => e.json())
          .then((dt) => this.setState({ ...this.state, data: dt.results }));
      }
    }

    render() {
      return <Func {...this.props} data={this.state.data}></Func>;
    }
  };
};

export default Connector;
