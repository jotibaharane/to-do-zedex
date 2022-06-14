import './App.css';
import Home from './component/Home';
import Add from './component/Add';
import { Route, Routes } from 'react-router-dom';
import Edit from './component/Edit';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
