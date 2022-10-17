import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DashBoardPage } from './components/pages/dashboard/DashBoardPage';
import { NotFoundPage } from './components/pages/not-found-404/NotFoundPage';
import { SettingsPage } from './components/pages/settings/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashBoardPage />} />
        <Route path='/settings' element={<SettingsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
