
import React from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
    console.log('componentDidUpdate')
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
