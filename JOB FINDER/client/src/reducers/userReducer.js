// src/reducers/userReducer.js
// const initialState = {
//     user: null, // Initial state for user
//     loading: false,
//     error: null,
// };

// const userReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'LOGIN':
//             return {
//                 ...state,
//                 user: action.payload,
//                 loading: false,
//             };
//         case 'LOGOUT':
//             return {
//                 ...state,
//                 user: null,
//             };
//         case 'LOADING':
//             return {
//                 ...state,
//                 loading: true,
//             };
//         case 'ERROR':
//             return {
//                 ...state,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default userReducer;

// src/redux/reducers/userReducer.js
const initialState = {
    token: null,
    firstName: null,
    jobTitle: null,
    email: null,
    profileUrl: null,
    accountType: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, ...action.payload };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default userReducer;

