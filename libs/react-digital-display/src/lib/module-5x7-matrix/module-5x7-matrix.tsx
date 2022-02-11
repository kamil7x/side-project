import clsx from 'clsx';

import { DisplayModule } from '../types';
import { Module5x7MatrixCharset } from './consts';

import styles from './module-5x7-matrix.module.scss';

export type Module5x7MatrixDataType = boolean[][];

export const Module5x7Matrix: DisplayModule<Module5x7MatrixDataType> = ({
  char,
}) => {
  return (
    <div className={styles.module}>
      {[...Array(7)].map((row, rowIndex) =>
        [...Array(5)].map((column, columnIndex) => (
          <div
            className={clsx(
              styles.dot,
              Module5x7Matrix.charset?.[char]?.[rowIndex]?.[columnIndex] &&
                styles.active
            )}
          />
        ))
      )}
    </div>
  );
};
Module5x7Matrix.charset = Module5x7MatrixCharset;
Module5x7Matrix.width = 144;
Module5x7Matrix.height = 196;

export default Module5x7Matrix;
