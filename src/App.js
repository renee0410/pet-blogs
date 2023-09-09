import './style/all.scss';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Layout></Layout>}>
          <Route path='/' element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
