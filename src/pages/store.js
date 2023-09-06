import { createStore, combineReducers } from 'redux';
import calculatorReducer from '../redux/reducer'; // Путь к вашему редьюсеру


const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

const store = createStore(rootReducer);

export default store;