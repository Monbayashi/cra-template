import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormCycle } from './FormCycle';

export default {
  title: 'Atomic Component/Organisms/FormCycle',
  component: FormCycle,
  parameters: {},
} as ComponentMeta<typeof FormCycle>;

const Template: ComponentStory<typeof FormCycle> = (args) => <FormCycle {...args} />;

export const Default = Template.bind({});
Default.args = {
  registerHandling: (args) => console.log(args),
  sendHandling: () => console.log('send'),
  isAutoSend: true,
  sendCycle: 1000,
};
Default.storyName = '送信周期フォーム';
