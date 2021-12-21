import React, { useMemo } from 'react';

import { DisplayModule, SpecialChar, UnknownCharacterMode } from './types';

import styles from './react-digital-display.module.scss';

export interface ReactDigitalDisplayProps {
  text: string | string[];
  module: DisplayModule<unknown>;
  size: number;
  height?: number;
  unknownCharacterMode?: UnknownCharacterMode;
}

export const ReactDigitalDisplay = ({
  text,
  module: ModuleComponent,
  size,
  height,
  unknownCharacterMode = 'omit',
}: ReactDigitalDisplayProps) => {
  const textArray = useMemo(
    () => (typeof text === 'string' ? text.split('') : text),
    [text]
  );

  const textToDisplay = useMemo(() => {
    const mappedArray = textArray
      .map((char) => {
        const isUnknownChar = !ModuleComponent.charset[char];

        if (isUnknownChar) {
          if (unknownCharacterMode === 'empty') {
            return SpecialChar.EMPTY;
          }
          if (unknownCharacterMode === 'omit') {
            return null;
          }
        }
        return char;
      })
      .reduce<string[]>(
        (arr, char) => [...arr, ...(char !== null ? [char] : [])],
        []
      );

    return Array.from(
      { ...mappedArray, length: size },
      (v) => v ?? SpecialChar.EMPTY
    );
  }, [ModuleComponent.charset, textArray, size, unknownCharacterMode]);

  return (
    <div
      className={styles.displayContainer}
    >
      <div
        className={styles.content}
      >
        {textToDisplay.map((char) => (
          <ModuleComponent char={char} />
        ))}
      </div>
    </div>
  );
};

export default ReactDigitalDisplay;
