import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  handleReset = () => {
    let counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleDecrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({
      counters
    });
  };

  handleDelete = counterId => {
    this.setState({
      counters: this.state.counters.filter(c => c.id !== counterId)
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          key="counters"
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onLessThanOne={this.handleLessThanOne}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
