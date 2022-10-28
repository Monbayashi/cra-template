import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { SideBar } from './SideBar';

export default {
  title: 'Atomic Component/Layouts/SideBar',
  component: SideBar,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <MemoryRouter>
    <SideBar {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.storyName = 'サイドバー';
