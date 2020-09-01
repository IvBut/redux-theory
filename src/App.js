import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import Counter from "./Counter";
import {add, addAsync, addNumber, sub} from "./redux/actions/actions";


class App extends React.Component{

  constructor(props) {
    super(props);
  }

  handleAddNumber = (e) => {
      e.preventDefault();
      let num = parseInt(e.target.value);
      e.target.value = '';
      if (Number.isNaN(num)) return null;
      this.props.onAddNumber(num);
  };

  render() {
    return (
        <div className={'appWrapper'}>
          <h1>Counter current value: {this.props.counter}</h1>
          <hr/>
          <div className={'controlsWrapper'}>
              <div style={{margin: '15px'}}>
                  <input type="text" onChange={this.handleAddNumber}/>
              </div>
              <button onClick={this.props.onAdd}>+</button>
              <button onClick={this.props.onSub}>-</button>
              <div style={{marginTop: '20px'}}>
                  <button onClick={this.props.onAsyncAdd.bind(this,100)}>Async Code</button>
              </div>
          </div>
          <br/>
          <Counter/>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => {dispatch(add())},
        onSub: () => {dispatch(sub())},
        onAddNumber: (newNumber) => {dispatch(addNumber(newNumber))},
        onAsyncAdd: (number) => dispatch(addAsync(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
