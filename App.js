import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import './App.css';
//import UpdateToDo from './Assignment2/todo';
import GuessNumber from './Assignment3/guessNum';
import BaseComponent from './Assignment3/Activity3';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <nav>
            <Link to='/Assignment3/guessNum'  className='button'>Guess Number Game</Link>
            <Link to='/Assignment3/Activity3'  className='button'>useContext</Link>
      </nav>

      <Routes>
        <Route exact path="/Assignment3/guessNum" element={<GuessNumber/>}></Route>
        <Route exact path="/Assignment3/Activity3" element={<BaseComponent/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;