import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  removeResult,
} from "../../store/actions/actions";
// import * as actionType from "../../store/actions/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl
          label="Increment"
          clicked={() => this.props.onIncrementCounter()}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.props.onDecrementCounter()}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.props.onAddCounter()}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.props.onSubtractCounter()}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((storedResult) => (
            <li
              key={storedResult.id}
              onClick={() => this.props.onRemoveResult(storedResult.id)}
            >
              {storedResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
    storedResults: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add(5)),
    onSubtractCounter: () => dispatch(subtract(5)),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onRemoveResult: (id) => dispatch(removeResult(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
