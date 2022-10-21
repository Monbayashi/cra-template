import { createContext, useContext, useReducer } from 'react';

type Action =
  | {
      type: 'update';
      time: string;
      datas: {
        dbName: string;
        value: string;
      }[];
    }
  | { type: 'unkown' }; // typeguard

type Dispatch = (action: Action) => void;

type State = {
  time: string;
  datas: {
    name: string;
    dbName: string;
    value: string;
  }[];
};

type ProviderProps = {
  children: React.ReactNode;
};

const SettingValueStatesContext = createContext<State | undefined>(undefined);
const SettingValueEventsContext = createContext<Dispatch | undefined>(undefined);

const settingValueReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'update': {
      const actionDatas = action.datas.map((aData) => ({
        ...aData,
        name: dbNameToName(aData.dbName),
      }));
      const actionDbNames = actionDatas.map((aData) => aData.dbName);
      const stateDatasFilter = state.datas.filter((sData) => !actionDbNames.includes(sData.dbName));
      const resultDatas = [...stateDatasFilter, ...actionDatas].sort((a, b) =>
        a.dbName > b.dbName ? 1 : -1,
      );
      return {
        time: action.time,
        datas: resultDatas,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const SettingValueProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(settingValueReducer, {
    time: '未受信',
    datas: [],
  });
  return (
    <SettingValueEventsContext.Provider value={dispatch}>
      <SettingValueStatesContext.Provider value={state}>
        {children}
      </SettingValueStatesContext.Provider>
    </SettingValueEventsContext.Provider>
  );
};

const useSettingValueStates = () => {
  const context = useContext(SettingValueStatesContext);
  if (context === undefined) {
    throw new Error('useSettingValueStates must be used within a SettingValueProvider');
  }
  return context;
};

const useSettingValueEvents = () => {
  const context = useContext(SettingValueEventsContext);
  if (context === undefined) {
    throw new Error('useSettingValueEvents must be used within a SettingValueProvider');
  }
  return context;
};

export { SettingValueProvider, useSettingValueStates, useSettingValueEvents };

const dbNameToName = (dbName: string) => {
  switch (dbName) {
    case 'opmode':
      return '運転モード';
    case 'peakshaving':
      return 'ピークカット制御(有効/無効)';
    case 'psreference':
      return 'ピークカット設定値';
    case 'psstart':
      return 'ピークカット放電開始電力';
    case 'psend':
      return 'ピークカット放電終了電力';
    case 'pving':
      return '太陽光連係充電制御(有効/無効)';
    case 'pvreference':
      return '太陽光連係設定値';
    case 'pvstart':
      return '太陽光連係充電開始電力';
    case 'pvend':
      return '太陽光連係充電終了電力';
    case 'socing':
      return 'SOC上下限監視機能(有効/無効)';
    case 'socuperr_on':
      return 'SOC上限値(警報)';
    case 'socupwarn_on':
      return 'SOC上限値(注意)';
    case 'soclorerr_on':
      return 'SOC下限値(警報)';
    case 'soclowarn_on':
      return 'SOC下限値(注意)';
    case 'socuperr_re':
      return 'SOC上限値(警報復旧)';
    case 'socupwarn_re':
      return 'SOC上限値(注意復旧)';
    case 'soclorerr_re':
      return 'SOC下限値(警報復旧)';
    case 'soclowarn_re':
      return 'SOC下限値(注意復旧)';
    default:
      return '未定義データ';
  }
};
