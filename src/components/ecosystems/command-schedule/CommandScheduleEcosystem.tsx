import { useCommandScheduleStates } from '../../../contexts/CommandScheduleContext';
import { CommandSchedule } from '../../organisms/command-schedule/CommandSchedule';

type Props = {
  // empty
};

export const CommandScheduleEcosystem: React.FC<Props> = () => {
  const state = useCommandScheduleStates();

  return <CommandSchedule time={state.time} datas={state.datas} />;
};
