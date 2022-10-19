import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormSvs } from './FormSvs';

export default {
  title: 'Atomic Component/Organisms/FormSvs',
  component: FormSvs,
  parameters: {},
} as ComponentMeta<typeof FormSvs>;

const Template: ComponentStory<typeof FormSvs> = (args) => <FormSvs {...args} />;

export const Default = Template.bind({});
Default.args = {
  registerHandling: (args) => console.log(args),
  isRandom: true,
  svs: [
    {
      id: 'a',
      name: 'hello',
      value: 1,
    },
  ],
};
Default.storyName = 'SV送信値フォーム';
