import React from 'react';

export enum SpecialChar {
  EMPTY = 'EMPTY',
}
export type UnknownCharacterMode = 'omit' | 'empty';

export interface Charset<DataType> {
  [SpecialChar.EMPTY]: DataType;
  [key: string | SpecialChar]: DataType;
}

export interface DisplayModuleProps {
  char: string;
}

export type DisplayModule<DataType> = React.ElementType<DisplayModuleProps> & {
  charset: Charset<DataType>;
  width: number;
  height: number;
};
