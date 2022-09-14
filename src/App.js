import './App.css';
import Banner from './components/Banner/Banner';
import Carrier from './components/Carrier';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Opertunity from './components/Opertunity';
import Recuiter from './components/Recuit';
import Header from './components/SharedComponents/Header/Header';
import Standard from './components/Standard';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className='mb-4'>
        <Standard />
        <Opertunity />
        <Carrier />
        <Recuiter />
        <HowItWorks />
      </div>
    </>


  );
}

export default App;
