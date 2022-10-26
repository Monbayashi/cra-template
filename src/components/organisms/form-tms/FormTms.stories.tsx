import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormTms } from './FormTms';

export default {
  title: 'Atomic Component/Organisms/FormTms',
  component: FormTms,
  parameters: {},
} as ComponentMeta<typeof FormTms>;

const Template: ComponentStory<typeof FormTms> = (args) => <FormTms {...args} />;

export const Default = Template.bind({});
Default.args = {
  saveModalOpenHandling: () => console.log('saveModalOpenHandling'),
  loadModalOpenHandling: () => console.log('loadModalOpenHandling'),
  registerHandling: (args) => console.log(args),
  isRandom: true,
  randomMax: 1000,
  randomMin: 0,
  tms: [
    {
      id: 'a',
      name: 'hello',
      value: 1,
    },
  ],
};
Default.storyName = 'TM送信値フォーム';
