import * as React from "react";
import {connect} from "react-redux";

class Counter extends React.Component{
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div style={{border : '20px solid red', padding: 20}}>
                <h1>Counter2version: {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={this.props.onChange.bind(this, 15)}>Add</button>
                    <button>Sub</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (number) => dispatch({type: 'onADD2', payload: {number}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);