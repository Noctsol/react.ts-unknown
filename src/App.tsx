import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



function App() {
  return (
    <>
      <Nav maxHeight="200px" maxWidth="100%" height="500px"/>
      <h1>Content Header</h1>
      <div>Content body</div>

    </>
  );
}

export default App;
