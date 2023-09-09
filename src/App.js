import './style/all.scss';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;
