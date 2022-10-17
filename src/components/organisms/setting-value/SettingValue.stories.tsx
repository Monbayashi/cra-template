import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SettingValue } from './SettingValue';

export default {
  title: 'Atomic Component/Organisms/SettingValue',
  component: SettingValue,
  parameters: {},
} as ComponentMeta<typeof SettingValue>;

const Template: ComponentStory<typeof SettingValue> = (args) => <SettingValue {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: '2022/10/17 16:59:23',
  datas: [
    { name: '運転モード', dbName: 'opmode', value: '1' },
    { name: 'ピークカット制御(有効/無効)', dbName: 'peakshaving', value: '0' },
    { name: 'ピークカット設定値', dbName: 'psreference', value: '9999' },
    { name: 'ピークカット放電開始電力', dbName: 'psstart', value: '9998' },
    { name: 'ピークカット放電終了電力', dbName: 'psend', value: '9997' },
    { name: '太陽光連係充電制御(有効/無効)', dbName: 'pving', value: '0' },
    { name: '太陽光連係設定値', dbName: 'pvreference', value: '-9999' },
    { name: '太陽光連係充電開始電力', dbName: 'pvstart', value: '-9998' },
    { name: '太陽光連係充電終了電力', dbName: 'pvend', value: '-9997' },
    { name: 'SOC上下限監視機能(有効/無効)', dbName: 'socing', value: '0' },
    { name: 'SOC上限値(警報)', dbName: 'socuperr_on', value: '100' },
    { name: 'SOC上限値(注意)', dbName: 'socupwarn_on', value: '99' },
    { name: 'SOC下限値(警報)', dbName: 'soclorerr_on', value: '1' },
    { name: 'SOC下限値(注意)', dbName: 'soclowarn_on', value: '2' },
    { name: 'SOC上限値(警報復旧)', dbName: 'socuperr_re', value: '99' },
    { name: 'SOC上限値(注意復旧)', dbName: 'socupwarn_re', value: '98' },
    { name: 'SOC下限値(警報復旧)', dbName: 'soclorerr_re', value: '2' },
    { name: 'SOC下限値(注意復旧)', dbName: 'soclowarn_re', value: '3' },
  ],
};
Default.storyName = 'NPMS設定値';

export const DataEmpty = Template.bind({});
DataEmpty.args = {
  datas: [],
};
DataEmpty.storyName = 'NPMS設定値(データなし)';
