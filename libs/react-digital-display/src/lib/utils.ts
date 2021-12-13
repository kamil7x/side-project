import { Charset } from './types';

export function extendCharset<DataType>(
  original: Charset<DataType>,
  additions: Charset<DataType>
): Charset<DataType> {
  return {
    ...original,
    ...additions,
  };
}
