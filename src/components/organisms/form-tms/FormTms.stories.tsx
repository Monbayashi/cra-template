import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormTms } from './FormTms';

export default {
  title: 'Atomic Component/Organisms/FormTms',
  component: FormTms,
  parameters: {},
} as ComponentMeta<typeof FormTms>;

const Template: ComponentStory<typeof FormTms> = (args) => <FormTms {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.storyName = 'TM送信値フォーム';
