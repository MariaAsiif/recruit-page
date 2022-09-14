import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/SharedComponents/Header/Header';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>


    </>


  );
}

export default App;
