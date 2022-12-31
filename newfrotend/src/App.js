
import './App.css';
import Register from './component/register';
import Login from './component/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toast } from './component/Toast';
import Content from './component/content';
import View from './component/View';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toast>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/con' element={<Content/>}/>
            <Route path='/view' element={<View/>}/>
          </Routes>
        </Toast>
      </BrowserRouter>
    </div>
  );
}

export default App;
