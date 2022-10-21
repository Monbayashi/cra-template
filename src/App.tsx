import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DashBoardPage } from './components/pages/dashboard/DashBoardPage';
import { NotFoundPage } from './components/pages/not-found-404/NotFoundPage';
import { RegistDataPage } from './components/pages/registdata/RegistDataPage';
import { SettingsPage } from './components/pages/settings/SettingsPage';
import { CommandScheduleProvider } from './contexts/CommandScheduleContext';
import { CycleSettingProvider } from './contexts/CycleSettingContext';
import { SettingValueProvider } from './contexts/SettingValueContext';
import { SvSettingProvider } from './contexts/SvSettingContext';
import { TmSettingProvider } from './contexts/TmSettingContext';
import { WebSocketContextProvider } from './contexts/WebsocketContext';
import { WebsocketSettingProvider } from './contexts/WebsocketSettingContext';

/**
 *  CycleSettingProvider dipendency [WebSocketContextProvider, TmSettingProvider, SvSettingProvider];
 *  WebSocketContextProvider dipendency [WebsocketSettingProvider, SettingValueProvider, CommandScheduleProvider];
 * @returns
 */
function App() {
  return (
    <Router>
      <WebsocketSettingProvider>
        <SettingValueProvider>
          <CommandScheduleProvider>
            <WebSocketContextProvider>
              {/* 区切り */}
              <TmSettingProvider>
                <SvSettingProvider>
                  <CycleSettingProvider>
                    <Routes>
                      <Route path='/' element={<DashBoardPage />} />
                      <Route path='/registdata' element={<RegistDataPage />} />
                      <Route path='/settings' element={<SettingsPage />} />
                      <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                  </CycleSettingProvider>
                </SvSettingProvider>
              </TmSettingProvider>
              {/* 区切り */}
            </WebSocketContextProvider>
          </CommandScheduleProvider>
        </SettingValueProvider>
      </WebsocketSettingProvider>
    </Router>
  );
}

export default App;
