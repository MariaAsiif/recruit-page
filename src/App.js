import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/SharedComponents/Header/Header';
import HomePage from './Pages/HomePage';
import { RecruitPage } from './Pages/RecruitPage';
import JoinUs from './Pages/JoinUs';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/joinUs" element={<JoinUs/>}/>
        <Route path="/resume" element={<Resume/>}/>
        
      </Routes>


    </>


  );
}

export default App;
