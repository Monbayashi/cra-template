import { useSettingValue } from '../../../contexts/SettingValueContext';
import { SettingValue } from '../../organisms/setting-value/SettingValue';

type Props = {
  // empty
};

export const SettingValueEcosystem: React.FC<Props> = () => {
  const { state } = useSettingValue();

  return <SettingValue time={state.time} datas={state.datas} />;
};
