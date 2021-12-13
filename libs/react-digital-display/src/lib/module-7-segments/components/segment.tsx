import clsx from 'clsx';

import styles from '../module-7-segments.module.scss';

export interface SegmentProps {
  type: 'horizontal' | 'vertical';
  isActive: boolean;
  className: string;
}

export const Segment = ({
  type,
  isActive = false,
  className = '',
}: SegmentProps) => {
  return (
    <div
      className={clsx(
        styles.segment,
        {
          [styles.active]: isActive,
          [styles.horizontal]: type === 'horizontal',
          [styles.vertical]: type === 'vertical',
        },
        className
      )}
    />
  );
};
