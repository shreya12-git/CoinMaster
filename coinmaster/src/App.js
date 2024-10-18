import HomePage from './pages/HomePage';
import { Link, Route,Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
// import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import StudynLearnPage from './pages/StudynLearnPage';

function App() {
  return (
    <div className="App  bg-blue-200">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
        {/* <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/studyandlearn' element={<StudynLearnPage></StudynLearnPage>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
