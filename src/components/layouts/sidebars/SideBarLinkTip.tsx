import { lintName } from '../../../utils/lintNames';

type Props = {
  tip: string;
  color: keyof typeof classNames;
};

const classNames = {
  Info: lintName('text-blue-500'),
  Warning: lintName('bg-yellow-500'),
  Error: lintName('text-red-500'),
} as const;

export const SideBarLinkTip: React.FC<Props> = ({ tip, color }) => (
  <span
    className={
      'ml-auto hidden rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium tracking-wide md:block ' +
      classNames[color]
    }
  >
    {tip}
  </span>
);
