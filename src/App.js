import './App.css';
import Router from './Router';
import { Link } from 'react-router-dom';
import { getUser } from './Redux/cardSlice';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react'

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  },[dispatch])

  return (
    <div className="App">
      <Link className="logo" to ="/">
        <h1><span>E</span>W@llet</h1>
      </Link>
    <Router/>
    </div>
  );
}

export default App;
