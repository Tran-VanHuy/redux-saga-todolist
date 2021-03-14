const DEFAULT_STATE = {

      name : 'Redux' 
}

export default (state = DEFAULT_STATE, action) => {

      switch(action.type) {
            default:
                  return state;
      }
};