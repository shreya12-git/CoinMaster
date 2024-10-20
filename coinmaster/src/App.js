import HomePage from './pages/HomePage';
import { Link, Route,Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
// import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import StudyAndLearnPage from './pages/StudyAndLearnPage';
import GamesPage from './pages/GamesPage';
import CalculatorsPage from './pages/CalculatorsPage';
import AskHerePage from './pages/AskHerePage';
import PlanYourBudgetPage from './pages/PlanYourBudgetPage';
import PodcastsPage from './pages/PodcastsPage';
// import StudynLearnPage from './pages/StudynLearnPage';

function App() {
  return (
    <div className="App  bg-blue-200">
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/signup' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/studylearn' element={<StudyAndLearnPage></StudyAndLearnPage>}></Route>
        <Route path='/games' element={<GamesPage></GamesPage>}></Route>
        <Route path='/calculators' element={<CalculatorsPage></CalculatorsPage>}></Route>
        <Route path='/askhere' element={<AskHerePage></AskHerePage>}></Route>
        <Route path='/budgetplanner' element={<PlanYourBudgetPage></PlanYourBudgetPage>}></Route>
        <Route path='/podcasts' element={<PodcastsPage></PodcastsPage>}></Route>

      </Routes>
    </div>
  );
}

export default App;
