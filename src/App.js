import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 3 },
    ],
    id:0

  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleAddProduct = () => {
    let counters = this.state.counters;
    counters.push({ id: this.state.id+1, value: 0 });
    this.setState({ counters });
    this.setState({id:this.state.id+1})
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className='container-fluid'>
          <Counters 
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onAddProduct={this.handleAddProduct}
            counters={this.state.counters}
            />
        </main>
      </React.Fragment>
    );
  }
}
export default App
