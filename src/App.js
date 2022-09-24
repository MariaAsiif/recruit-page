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
          <Route index element={<ApplyNewJob />} />
          {/* <Route path="users" element={<UsersPage />} /> */}

        </Route>



      </Routes>


    </>


  );
}

export default App;
