import React from 'react';

export enum SpecialChar {
  EMPTY = 'EMPTY',
}
export type UnknownCharacterMode = 'omit' | 'empty';

export interface Charset<DataType> {
  [SpecialChar.EMPTY]: DataType;
  [key: string | SpecialChar]: DataType;
}

export interface ModuleProps {
  char: string;
}

export type DisplayModule<DataType> = React.ElementType<ModuleProps> & {
  charset: Charset<DataType>;
  width: number;
  height: number;
};
