import React, { Component } from "react";
import Counters from "./counters";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag-1", "tag-2", "tag-3"],
    //imgUrl: "https://picsum.photos/200/300?blur=3&grayscale"
    //<img src={this.state.imgUrl}></img>
  };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-secondary">{this.props.keyValue}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
        <br />
        {/*
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
