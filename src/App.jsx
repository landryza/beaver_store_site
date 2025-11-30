import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercise';
import EditExercisePage from './pages/EditExercise';
import './App.css'
import Navigation from './components/Navigation';

function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState(0)

  return (
    <div className='app'>
      <header>
        <h1>Exercise Routine</h1>
        <p>Easily track your workouts.</p>
      </header>

      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage setExerciseToEdit={setExerciseToEdit} />}></Route>
          <Route path='/create-exercise' element={<CreateExercisePage />}></Route>
          <Route path='/edit-exercise' element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}></Route>
        </Routes>
      </Router>

      <footer>
        <p>&copy; 2025 Zachary Landry</p>
      </footer>
    </div>  
    );
}

export default App
