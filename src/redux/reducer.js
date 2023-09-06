const initialState = {
    result: 0,
  };
  
  const calculatorReducer = (state = initialState, action) => {
    if (action.type === 'PERFORM_OPERATION') {
      let newResult = 0;
  
      if (action.operation === '+') {
        newResult = action.num1 + action.num2;
      } else if (action.operation === '-') {
        newResult = action.num1 - action.num2;
      } else if (action.operation === '*') {
        newResult = action.num1 * action.num2;
      } else if (action.operation === '/') {
        newResult = action.num1 / action.num2;
      }
  
      return {
        ...state,
        result: newResult,
      };
    } else {
      return state;
    }
  };
  
  export default calculatorReducer;
  