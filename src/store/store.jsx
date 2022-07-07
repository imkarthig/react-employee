import { createStore } from 'redux';

import EmployeReducer from './reducer/EmployeReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
 employe: EmployeReducer,
});

export const store = createStore(allReducers);

// export const store = createStore(CounterReducer);
