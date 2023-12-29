// import './App.css';
// //import ClassParent from './class';
// import ClassWork  from './classwork';
// //import Main from './main';

// function App(){

   
//   return (
//     <div className="App">
//       <h1 style={{color: "yellow"}}>But its Golden like Daylight</h1>
//       <ClassWork />
//     </div>
//   );
// }


// export default App;

import React from 'react';
import Header from './Assignment1/Header';
import Sidenav from './Assignment1/Sidenav';
import MainContent from './Assignment1/MainContent';
import Footer from './Assignment1/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <Header title="Header"/>
      <div className = "App-container">
        <Sidenav title= "Sidenav"/>
        <MainContent title = "Main Content"/>
      </div>
      <Footer title="Footer"/>
    </div>
  );
};

export default App;