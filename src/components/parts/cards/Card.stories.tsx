import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { CardHeader } from './CardHeader';

export default {
  title: 'Atomic Component/Parts/Card',
  component: Card,
  parameters: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <CardHeader title='Hello' description='(2022/10/10 10:10:10)' />
      <div>
        <li className='text-gray-100'>
          <ul>1aaa</ul>
          <ul>1bbb</ul>
          <ul>1ccc</ul>
          <ul>1ddd</ul>
          <ul>1eee</ul>
          <ul>1fff</ul>
          <ul>1ggg</ul>
          <ul>1hhh</ul>
          <ul>1iii</ul>
          <ul>1jjj</ul>
        </li>
      </div>
    </>
  ),
};
Default.storyName = 'カード';
