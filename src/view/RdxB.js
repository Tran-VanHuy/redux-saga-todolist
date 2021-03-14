import React from 'react';
import { connect } from 'react-redux';
import { decreaseNumber, increaseNumber } from '../redux/actions';

const RdxB = (props) => {
      return (
            <div className = "">
                  <p> Redux B</p>
                  <p> Number : {props.number}</p>
                  <button onClick = {() =>  props.onDecrease()}>Update</button>
            </div>
      );
};

const mapStateToProps = state => ({

      number : state.reducers1.number
});

const mapDispatchToProps = dispatch => ({

      onIncrease: () => dispatch(increaseNumber()),
      onDecrease: () => dispatch(decreaseNumber())
})
export default connect(mapStateToProps, mapDispatchToProps)(RdxB);