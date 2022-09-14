import './App.css';
import Carrier from './components/Carrier';
import Opertunity from './components/Opertunity';
import Recuiter from './components/Recuit';
import Standard from './components/Standard';

function App() {
  return (
    <div className='mb-4'>
      <Standard />
      <Opertunity />
      <Carrier />
      <Recuiter/>
    </div>

  );
}

export default App;
