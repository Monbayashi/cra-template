import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Card } from '../parts/cards/Card';
import { CardFooter } from '../parts/cards/CardFooter';
import { CardHeader } from '../parts/cards/CardHeader';

import { Layout } from './index';

export default {
  title: 'Atomic Component/Layouts',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <MemoryRouter>
    <Layout {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <h2 className='text-gray-600 text-xl font-black m-4 '>Test Pattern 1</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 px-4'>
        <Card>
          <CardHeader
            title='Title'
            description='descriptionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          />
          <div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </div>
          <CardFooter>ボタンなどのアクションを書く</CardFooter>
        </Card>
        <Card>
          <CardHeader title='Title' description='description' />
          <CardFooter>ボタンなどのアクションを書く</CardFooter>
        </Card>
        <Card>
          <CardHeader title='Title' description='description' />
          <CardFooter>ボタンなどのアクションを書く</CardFooter>
        </Card>
        <Card>
          <CardHeader title='Title' description='description' />
          <CardFooter>ボタンなどのアクションを書く</CardFooter>
        </Card>
      </div>
      <h2 className='text-gray-600 text-xl font-black m-4 '>Test Pattern 2</h2>
      <div className='px-4 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-8'>
        <div className='flex items-stretch lg:col-span-8'>
          <Card>
            <CardHeader title='Title' description='description' />
            <CardFooter>ボタンなどのアクションを書く</CardFooter>
          </Card>
        </div>
        <div className='flex items-stretch lg:col-span-4'>
          <Card>
            <CardHeader title='Title' description='description' />
            <CardFooter>ボタンなどのアクションを書く</CardFooter>
          </Card>
        </div>
      </div>
    </>
  ),
};
Default.storyName = 'Layout';
