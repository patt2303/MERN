// import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

// import { Footer, Navbar } from "./components";
// import {
//   About,
//   AuthPage,
//   Companies,
//   CompanyProfile,
//   FindJobs,
//   JobDetail,
//   UploadJob,
//   UserProfile,
// } from "./pages";
// import { useSelector } from "react-redux";

// function Layout() {
//   const { user } = useSelector((state) => state.user);
//   const location = useLocation();

//   // Accessing state using useSelector
//   const count = useSelector((state) => state.counter.count);

//   // Getting the dispatch function
//   const dispatch = useDispatch();

//   return user?.token ? (
//     <Outlet />
//   ) : (
//     <Navigate to='/user-auth' state={{ from: location }} replace />
//   );
// }

// function App() {
//   const { user } = useSelector((state) => state.user);
  // return (
  //   <main className='bg-[#f7fdfd]'>
  //     <Navbar />

  //     <Routes>
  //       <Route element={<Layout />}>
  //         <Route
  //           path='/'
  //           element={<Navigate to='/find-jobs' replace={true} />}
  //         />
  //         <Route path='/find-jobs' element={<FindJobs />} />
  //         <Route path='/companies' element={<Companies />} />
  //         <Route
  //           path={
  //             user?.user?.accountType === "seeker"
  //               ? "/user-profile"
  //               : "/user-profile/:id"
  //           }
  //           element={<UserProfile />}
  //         />

  //         <Route path={"/company-profile"} element={<CompanyProfile />} />
  //         <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
  //         <Route path={"/upload-job"} element={<UploadJob />} />
  //         <Route path={"/job-detail/:id"} element={<JobDetail />} />
  //       </Route>

  //       <Route path='/about-us' element={<About />} />
  //       <Route path='/user-auth' element={<AuthPage />} />
  //     </Routes>
  //     {user && <Footer />}
  //   </main>
  // );
// }

// export default App;
// src/App.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'; // Ensure this line is present only once
// import UserProfile from './pages/UserProfile'; // Example import for your page/component

// function App() {
//   // Accessing state using useSelector
//   const { user } = useSelector((state) => state.user); // Assuming you have a user reducer

//   // Getting the dispatch function
//   const dispatch = useDispatch();

//   const handleIncrement = () => {
//     dispatch({ type: 'INCREMENT' }); // Example action
//   };

//   const handleDecrement = () => {
//     dispatch({ type: 'DECREMENT' }); // Example action
//   };

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <h2>Welcome, {user.name}</h2> {/* Display user name */}
//       <button onClick={handleIncrement}>Increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// }

// export default App;

// In your App.js or wherever you use useSelector
// import React from 'react';
// import { useSelector } from 'react-redux';

// function App() {
//     const { user } = useSelector((state) => state.user); // Make sure this is correct
//     console.log(user); // Add this line to see what user contains

//     return (
//         <div>
//              return (
//     <main className='bg-[#f7fdfd]'>
//       <Navbar />

//       <Routes>
//         <Route element={<Layout />}>
//           <Route
//             path='/'
//             element={<Navigate to='/find-jobs' replace={true} />}
//           />
//           <Route path='/find-jobs' element={<FindJobs />} />
//           <Route path='/companies' element={<Companies />} />
//           <Route
//             path={
//               user?.user?.accountType === "seeker"
//                 ? "/user-profile"
//                 : "/user-profile/:id"
//             }
//             element={<UserProfile />}
//           />

//           <Route path={"/company-profile"} element={<CompanyProfile />} />
//           <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
//           <Route path={"/upload-job"} element={<UploadJob />} />
//           <Route path={"/job-detail/:id"} element={<JobDetail />} />
//         </Route>

//         <Route path='/about-us' element={<About />} />
//         <Route path='/user-auth' element={<AuthPage />} />
//       </Routes>
//       {user && <Footer />}
//     </main>
//   );
//         </div>
//     );
// }

// export default App;


// src/App.js
// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout'; // Ensure this file exists
import FindJobs from './pages/FindJobs';
import Companies from './pages/Companies';
import UserProfile from './pages/UserProfile';
import CompanyProfile from './pages/CompanyProfile';
import UploadJob from './pages/UploadJob';
import JobDetail from './pages/JobDetail';
import About from './pages/About';
import AuthPage from './pages/AuthPage'; // Ensure this file exists
import Footer from './components/Footer';
import './index.css';

// Ensure all necessary components are defined and imported correctly


function App() {
    const { user } = useSelector((state) => state.user); // Example usage of useSelector

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<FindJobs />} />
                    <Route path="companies" element={<Companies />} />
                    <Route path="user-profile" element={<UserProfile />} />
                    <Route path="company-profile" element={<CompanyProfile />} />
                    <Route path="upload-job" element={<UploadJob />} />
                    <Route path="job-detail" element={<JobDetail />} />
                    <Route path="about" element={<About />} />
                    <Route path="auth" element={<AuthPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

