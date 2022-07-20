import { lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './src/assests/style.css';
import Loader from './src/components/loader';
import Recruit from './src/pages/recruit';
const Home = lazy(() => import("./src/pages/home"));

function App() {

  // React State management hook
  const [loading, setLoading] = useState(true )

  // React UseEffect update data hook
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000);
  // }, [])

  // // on load page 
  // if (loading === true ) {
  //   return <Loader />
  // }
  // else {
    return (
      <>
        <Router>
          <Routes >
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Recruit />} />
          </Routes >
        </Router>
      </>
    );
  }
// }

export default App;
