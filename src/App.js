import './App.css';
import React, { useEffect } from 'react';
import CommingSoon from './components/CommingSoon/CommingSoon';

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
// import Header from './components/SharedComponents/Header/Header';
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
import ResentJob from './Pages/ResentJob';
import ProfileSetting from './Pages/ProfileSetting';
import Notification from './Pages/Notification';
import NotificationDetail from './Pages/NotificationDetail';

import AdminDashboard from './Pages/AdminDashboard';
// import Analytics from './Pages/Analytics';
// import Fintech from './Pages/Fintech';

import PageNotFound from './Pages/utility/PageNotFound';
import Signin from './Pages/Signin';
import Signups from './Pages/Signups';

import MainWrapper from './Pages/MainWrapper';
import { useSelector } from 'react-redux';

import Jobs from './Pages/Jobs/Jobs';
import CreateJob from './Pages/Jobs/CreateJob';

import Candidate from './Pages/candidates/candidates';
import CreateCandidate from './Pages/candidates/CreateCandidate';
import Employers from './Pages/employers/employers';
import CreateEmployer from './Pages/employers/CreateEmployer';
import Department from './Pages/department/departments';
import CreateDepartment from './Pages/department/CreateDepartment';
import Designation from './Pages/designation/designation';
import CreateDesignation from './Pages/designation/CreateDesignation';
import Inspire from './Pages/inspire/inspire';
import CreateInspire from './Pages/inspire/CreateInspire';
import Ticker from './Pages/ticker/ticker';
import CreateTicker from './Pages/ticker/CreateTicker';
import FeedBack from './Pages/feedback/feedback';
import CreateFeedback from './Pages/feedback/CreateFeedback';
import UserFeedback from './Pages/UserFeedback';
import Faqs from './Pages/faqs/Faqs';
import CreateFaq from './Pages/faqs/CreateFaq';
import Policy from './Pages/policies/Policy';
import CreatePolicy from './Pages/policies/CreatePolicy';

// import Locate from './Pages/locate/locate';
import CreateDoctor from './Pages/locate/Doctors/CreateDoctor';
import CreateLawyer from './Pages/locate/Lawyers/CreateLawyer';
import CreateServices from './Pages/locate/Services/CreateServices';
import Permission from './Pages/permission/permission';
import CreatePermission from './Pages/permission/CreatePermission';
import CreateRole from './Pages/role/Roles/CreateRole';
import Roles from './Pages/role/Roles/roles';
import SinglePermission from './Pages/role/Singlepermission/singlePermission';
import CreateSinglePermission from './Pages/role/Singlepermission/CreatePermission';
import MutiplePermission from './Pages/role/MultiplePermission/multiplepermission';
import CreateMultiplePermission from './Pages/role/MultiplePermission/CreatePermission';

import Doctors from './Pages/locate/Doctors/Doctors';
import Lawyers from './Pages/locate/Lawyers/Lawyers';
import Services from './Pages/locate/Services/Services';
import CreatePhoneBook from './Pages/phoneBook/CreatePhoneBook';
import PhoneBooks from './Pages/phoneBook/phoneBooks';
import TermsConditions from './Pages/termsCondition/termsCondition';
import CreateTermsCondition from './Pages/termsCondition/CreateTerms';
import AboutUs from './Pages/AboutUs/AboutUs';
import CreateAboutUs from './Pages/AboutUs/CreateAboutUs';
import AssignRole from './Pages/user/AssignRole';
import Users from './Pages/user/users';
import CreateUsers from './Pages/user/CreateUser';
import Lexicon from './Pages/lexicon/Lexicon';
import PublicBetaLogin from './Pages/PublicBetaLogin';
import CreateLexicon from './Pages/adminLexicon/CreateLexicon';
import Lexicons from './Pages/adminLexicon/Lexicon';
import Emailverification from './Pages/Emailverification';
import DasSignupPage from './Pages/DasSignupPage';
import DasSignInPage from './Pages/DasSignInPage';
import DASAccountSignup from './components/DASComponents/AccountSignup';
import LandingPage from './Pages/LandingPages/Home/Home';
import MainPage from './Pages/LandingPages/MainPage/MainPage';
import Stocks from './Pages/LandingPages/Stock/Stock';
import LocatehomePage from './components/LandingPageComponents/LocaterPage/LocatehomePage';
import Detail from './components/LandingPageComponents/LayerDetail/Detail';
import Appointments from './Pages/AdminPages/Appointment/Appointments';
import CreateAppointment from './Pages/AdminPages/Appointment/CreateAppointment';
import NewDashboardPage from './Pages/NewDashboardPage';
import Support from './components/NewDashboardComponents/Support';
import NewDashboard from './components/NewDashboardComponents/NewDashboard';
import NewServices from './components/NewDashboardComponents/NewServices';
import Inbox from './components/NewDashboardComponents/Inbox';
import Orders from './components/NewDashboardComponents/Orders';
import Categories from './Pages/AdminPages/Ecome/Category/Categories';
import CreateCategory from './Pages/AdminPages/Ecome/Category/CreateCategory';
import Products from './Pages/AdminPages/Ecome/Product/Products';
import CreateProduct from './Pages/AdminPages/Ecome/Product/CreateProduct';
import CreateStore from './Pages/AdminPages/Ecome/Store/CreateStore';
import Stores from './Pages/AdminPages/Ecome/Store/Stores';
import Notifications from './components/NewDashboardComponents/Notifications';
import Diseases from './Pages/AdminPages/Disease/Diseases';
import CreateDisease from './Pages/AdminPages/Disease/CreateDisease';

const RequireAuth = ({ children }) => {
  const token = useSelector((state) => state.userAuth.loginInfo.token);
  let location = useLocation();
  if (!token) {
    return <Navigate to='/adminsignin' state={{ from: location }} replace />;
  }
  return children;
};

// const RecruitAuth = ({ children }) => {
//   const token = useSelector((state) => state.recruitAuth.loginInfo.token);
//   let location = useLocation();
//   if (!token) {
//     return <Navigate to='/' state={{ from: location }} replace />;
//   }
//   return children;
// };

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change
  return (
    <>

      <Routes>
        {/* main beta page  */}
        <Route path="/" element={<PublicBetaLogin />} />
        {/* Landing pages  */}
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/locator" element={<LocatehomePage />} />
        <Route path="/userDetail" element={<Detail />} />
        <Route path="/homepage" element={<MainPage />} />
        <Route path="/stock" element={<Stocks />} />
        <Route path='/newdashboard' element={<NewDashboardPage />} />
        {/* Recuit Pages  */}
        <Route path="/Home" element={<HomePage />} />
        <Route path="/das" element={<DasSignupPage />} />
        {/* <Route path="/das-signup" element={<DASAccountSignup />} /> */}
        <Route path="/das-signin" element={<DasSignInPage />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/joinus" element={<JoinUs />} />
        <Route path="/detail" element={<Resume />} />
        <Route path="/lexicon" element={<Lexicon />} />
        <Route path="/dashboard" element={<Dashboard />} >
          <Route index path="new-job" element={<ApplyNewJob />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
          <Route path="recent-jobs" element={<ResentJob />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route path="notification" element={<Notification />} />
          <Route path="notification-detail" element={<NotificationDetail />} />
        </Route>

        <Route path="/newdashboard" element={<NewDashboardPage />} >
          <Route index element={<NewDashboard />} />
          <Route index path="services" element={<NewServices />} />
          <Route index path="inbox" element={<Inbox />} />
          <Route index path="orders" element={<Orders />} />
          <Route index path="support" element={<Support />} />
          <Route index path="notifications" element={<Notifications />} />

        </Route>




        {/* Admin Dashboard */}
        <Route path='/comingsoon' element={<CommingSoon />} />
        <Route path='/user-feedback' element={<UserFeedback />} />
        <Route path='/adminsignin' element={<Signin />} />
        <Route path='/adminsignup' element={<Signups />} />
        <Route
          path='/admindashboard'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<AdminDashboard />} />
          {/* <Route path='analytics' element={<Analytics />} /> */}
          {/* <Route path='fintech' element={<Fintech />} /> */}
        </Route>

        <Route
          path='/appointment'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Appointments />} />
          <Route path='create-appointment' element={<CreateAppointment />} />
        </Route>

        <Route
          path='/ecome/'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route path='products' element={<Products />} />
          <Route path='category' element={<Categories />} />
          <Route path='store' element={<Stores />} />
          <Route path='products/create-products' element={<CreateProduct />} />
          <Route path='category/create-category' element={<CreateCategory />} />
          <Route path='store/create-store' element={<CreateStore />}  />
        </Route>

        <Route
          path='/disease'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Diseases />} />
          <Route path='create-disease' element={<CreateDisease />} />
        </Route>
        


        <Route
          path='/department'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Department />} />
          <Route path='create-department' element={<CreateDepartment />} />
        </Route>
        <Route
          path='/designation'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Designation />} />
          <Route path='create-designation' element={<CreateDesignation />} />
        </Route>

        <Route
          path='/jobs'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Jobs />} />
          <Route path='create-job' element={<CreateJob />} />
        </Route>

        <Route
          path='/candidates'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Candidate />} />
          <Route path='create-candidate' element={<CreateCandidate />} />
        </Route>
        <Route
          path='/employers'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Employers />} />
          <Route path='create-employers' element={<CreateEmployer />} />
        </Route>
        <Route
          path='/inspire'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Inspire />} />
          <Route path='create-inspire' element={<CreateInspire />} />
        </Route>

        <Route
          path='/ticker'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Ticker />} />
          <Route path='create-ticker' element={<CreateTicker />} />
        </Route>

        <Route
          path='/phonebook'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<PhoneBooks />} />
          <Route path='create-phonebook' element={<CreatePhoneBook />} />
        </Route>

        <Route
          path='/feedback'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<FeedBack />} />
          <Route path='create-feedback' element={<CreateFeedback />} />
        </Route>

        <Route
          path='/locate/'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route path='doctor' element={<Doctors />} />
          <Route path='lawyer' element={<Lawyers />} />
          <Route path='services' element={<Services />} />
          <Route path='doctor/create-doctor' element={<CreateDoctor />} />
          <Route path='lawyer/create-lawyer' element={<CreateLawyer />} />
          <Route path='services/create-service' element={<CreateServices />} />
        </Route>

        <Route
          path='/faq'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Faqs />} />
          <Route path='create-faq' element={<CreateFaq />} />
        </Route>

        <Route
          path='/policy'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Policy />} />
          <Route path='create-policy' element={<CreatePolicy />} />
        </Route>

        <Route
          path='/permission'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Permission />} />
          <Route path='create-permission' element={<CreatePermission />} />
        </Route>

        <Route
          path='/roles'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Roles />} />
          <Route path='create-roles' element={<CreateRole />} />
        </Route>

        <Route
          path='/singlePermission'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<SinglePermission />} />
          <Route
            path='create-permission/:id'
            element={<CreateSinglePermission />}
          />
        </Route>

        <Route
          path='/multiplePermission'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<MutiplePermission />} />
          <Route
            path='create-permission/:id'
            element={<CreateMultiplePermission />}
          />
        </Route>

        <Route
          path='/terms'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<TermsConditions />} />
          <Route path='create-terms' element={<CreateTermsCondition />} />
        </Route>

        <Route
          path='/aboutus'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<AboutUs />} />
          <Route path='create-aboutus' element={<CreateAboutUs />} />
        </Route>

        <Route
          path='/lexicons'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Lexicons />} />
          <Route path='create-lexicon' element={<CreateLexicon />} />
        </Route>

        <Route
          path='/user'
          element={
            <RequireAuth>
              <MainWrapper />
            </RequireAuth>
          }
        >
          <Route index element={<Roles />} />
          <Route path='assign-role' element={<AssignRole />} />
          <Route path='list' element={<Users />} />
          <Route path='list/create-user' element={<CreateUsers />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />




      </Routes>


    </>


  );
}

export default App;
