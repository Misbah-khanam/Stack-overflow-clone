import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom' ;
import AllRoutes from './components/AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div >
      <Router>
        <Navbar/>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
