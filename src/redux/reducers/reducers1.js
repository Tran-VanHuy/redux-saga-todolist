import { AcctionTypes }  from '../actions/index';

const DEFAULT_STATE = {

      number : 1
}

export default (state = DEFAULT_STATE, action) => {

      switch(action.type) {

            case AcctionTypes.INCREASE:
                  return {
                        
                        number :  state.number + 1
                  }

            case AcctionTypes.DECREASE:
                  return {

                        number : state.number - 1
                  }
            default:
                  return state;
      }
};