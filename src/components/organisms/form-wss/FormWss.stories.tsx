import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormWss } from './FormWss';

export default {
  title: 'Atomic Component/Organisms/FormWss',
  component: FormWss,
  parameters: {},
} as ComponentMeta<typeof FormWss>;

const Template: ComponentStory<typeof FormWss> = (args) => <FormWss {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'Ws設定値フォーム';
