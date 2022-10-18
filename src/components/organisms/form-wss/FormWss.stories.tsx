import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormWss } from './FormWss';

export default {
  title: 'Atomic Component/Organisms/FormWss',
  component: FormWss,
  parameters: {},
} as ComponentMeta<typeof FormWss>;

const Template: ComponentStory<typeof FormWss> = (args) => <FormWss {...args} />;

export const Default = Template.bind({});
Default.args = {
  registerHandling: (args) => console.log(args),
  origin: 'ws://000.000.000.000:00000',
  deviceId: 'TEST-0000000000',
  secKey: 'kjfsldkfjskldjflkasjdfklajsdflkj',
};
Default.storyName = 'Ws設定値フォーム';
