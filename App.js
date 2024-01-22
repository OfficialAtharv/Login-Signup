import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './componants/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './componants/Login';

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>

    </Routes>
    </>
  );
}

export default App;
