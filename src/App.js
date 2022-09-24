import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/SharedComponents/Header/Header';
import HomePage from './Pages/HomePage';
import { RecruitPage } from './Pages/RecruitPage';
import JoinUs from './Pages/JoinUs';
import Resume from './Pages/Resume';
import Login from './Pages/Login';
import Verify from './Pages/Verify';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import ApplyNewJob from './Pages/ApplyNewJob';
import AppliedJobs from './Pages/AppliedJobs';
import JobsHistory from './Pages/JobsHistory';
import ProfileSetting from './Pages/ProfileSetting';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/detail" element={<Resume />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

        <Route path="/dashboard" element={<Dashboard />} >
          <Route index path="new-job" element={<ApplyNewJob />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
          <Route path="jobs-history" element={<JobsHistory />} />
          <Route path="profile-setting" element={<ProfileSetting />} />

        </Route>



      </Routes>


    </>


  );
}

export default App;
