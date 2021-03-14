import React from 'react';
import { connect } from 'react-redux';
import { increaseNumber } from '../redux/actions';


const RdxA = (props) => {
      
      return (
            <div className = "">
            <p> Redux A</p>
            <p> Number : {props.number}</p>
            <button onClick = {() => props.onIncrease() }>Update</button>
      </div>
      );
};

const mapStateToProps = state => ({

      number : state.reducers1.number
});


const mapDispatchToProps = dispatch => ({

      onIncrease: () => dispatch(increaseNumber())
})

export default connect(mapStateToProps, mapDispatchToProps)(RdxA);