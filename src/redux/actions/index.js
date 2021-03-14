
export const AcctionTypes = {

      INCREASE : 'INCREASE',
      DECREASE : ' DECREASE'
};

export function increaseNumber(){

      return {

            type : AcctionTypes.INCREASE
      }
}

export function decreaseNumber() {

      return {

            type : AcctionTypes.DECREASE
      }
}