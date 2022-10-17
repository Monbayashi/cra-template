import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommandSchedule } from './CommandSchedule';

export default {
  title: 'Atomic Component/Organisms/CommandSchedule',
  component: CommandSchedule,
  parameters: {},
} as ComponentMeta<typeof CommandSchedule>;

const Template: ComponentStory<typeof CommandSchedule> = (args) => <CommandSchedule {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: '2022/10/17 16:59:23',
  datas: [
    { at: '2022/01/01 01:07', duration: '4', value: '-4' },
    { at: '2022/01/01 01:04', duration: '3', value: '-3' },
    { at: '2022/01/01 01:02', duration: '2', value: '-2' },
    { at: '2022/01/01 01:01', duration: '1', value: '-1' },
    { at: '2022/01/01 01:07', duration: '4', value: '-4' },
    { at: '2022/01/01 01:04', duration: '3', value: '-3' },
    { at: '2022/01/01 01:02', duration: '2', value: '-2' },
    { at: '2022/01/01 01:01', duration: '1', value: '-1' },
    { at: '2022/01/01 01:07', duration: '4', value: '-4' },
    { at: '2022/01/01 01:04', duration: '3', value: '-3' },
    { at: '2022/01/01 01:02', duration: '2', value: '-2' },
    { at: '2022/01/01 01:01', duration: '1', value: '-1' },
    { at: '2022/01/01 01:07', duration: '4', value: '-4' },
    { at: '2022/01/01 01:04', duration: '3', value: '-3' },
    { at: '2022/01/01 01:02', duration: '2', value: '-2' },
    { at: '2022/01/01 01:01', duration: '1', value: '-1' },
    { at: '2022/01/01 01:07', duration: '4', value: '-4' },
    { at: '2022/01/01 01:04', duration: '3', value: '-3' },
    { at: '2022/01/01 01:02', duration: '2', value: '-2' },
    { at: '2022/01/01 01:01', duration: '1', value: '-1' },
    { at: '2022/01/01 01:07', duration: '4', value: '-4' },
    { at: '2022/01/01 01:04', duration: '3', value: '-3' },
    { at: '2022/01/01 01:02', duration: '2', value: '-2' },
    { at: '2022/01/01 01:01', duration: '1', value: '-1' },
  ],
};
Default.storyName = '充放電制御指令';

export const DataEmpty = Template.bind({});
DataEmpty.args = {
  datas: [],
};
DataEmpty.storyName = '充放電制御指令(データなし)';
