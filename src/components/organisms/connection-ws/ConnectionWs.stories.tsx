import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ConnectionWs } from './ConnectionWs';

export default {
  title: 'Atomic Component/Organisms/ConnectionWs',
  component: ConnectionWs,
  parameters: {},
} as ComponentMeta<typeof ConnectionWs>;

const Template: ComponentStory<typeof ConnectionWs> = (args) => <ConnectionWs {...args} />;

export const Default = Template.bind({});
Default.args = {
  connectHandling: () => console.log('connectHandling'),
  disConnectHandling: () => console.log('disConnectHandling'),
  status: 0,
  wsInfo: {
    type: 'ws',
    ip: '000.000.000.000:00000',
    deviceId: 'TEST-0000000000',
    secKey: 'rJLbVnp0tynKD1aDCb0QGxqvqS6t8M906INKX7mOWEfPvVPecmTRejUkOwTrH5Oq',
  },
};
Default.storyName = 'Websocketコネクション';
