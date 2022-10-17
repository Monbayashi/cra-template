import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommandSchedule } from './CommandSchedule';

export default {
  title: 'Atomic Component/Organisms/CommandSchedule',
  component: CommandSchedule,
  parameters: {},
} as ComponentMeta<typeof CommandSchedule>;

const Template: ComponentStory<typeof CommandSchedule> = (args) => <CommandSchedule {...args} />;

export const Default = Template.bind({});
Default.storyName = '充放電制御指令';
