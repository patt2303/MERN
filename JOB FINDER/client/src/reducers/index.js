// src/reducers/index.js

// import { combineReducers } from 'redux';
// import counterReducer from './counterReducer'; // Import your counterReducer

// const rootReducer = combineReducers({
//   counter: counterReducer, // Add your reducer here
// });

// export default rootReducer;

// src/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer'; // Import your user reducer

const rootReducer = combineReducers({
    user: userReducer, // This key should match what you are using in useSelector
    // Add other reducers here
});

export default rootReducer;

