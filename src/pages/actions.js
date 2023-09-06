import React from "react";

const performOperation = (operation, num1, num2) => {
    return {
      type: 'PERFORM_OPERATION',
      operation,
      num1,
      num2,
    };
  };

  export default performOperation
  