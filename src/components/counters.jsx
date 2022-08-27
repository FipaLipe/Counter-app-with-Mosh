import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onAddProduct, onDelete, onIncrement, counters } =
      this.props;
    return (
      <div>
        <button
          onClick={onAddProduct}
          className="btn btn-lg btn-outline-success m-2"
        >
          Add Product
        </button>
        <button
          onClick={onReset}
          className="btn btn-lg btn-outline-primary m-2"
        >
          Reset
        </button>
        <br />
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            keyValue={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
