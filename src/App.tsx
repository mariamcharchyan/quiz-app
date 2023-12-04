// App.tsx
import React from 'react';
import Quiz from './components/Quiz';

import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <h1>Quiz App</h1>
      <Quiz />
    </div>
  );
};

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       </header>
//     </div>
//   );
// }

// export default App;
