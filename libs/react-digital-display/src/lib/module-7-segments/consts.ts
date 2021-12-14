import { Charset, SpecialChar } from '../types';
import { SegmentProps } from './components/segment';
import { Module7SegmentsDataType } from './module-7-segments';

export const SEGMENTS: { key: string; type: SegmentProps['type'] }[] = [
  { key: 'a', type: 'horizontal' },
  { key: 'b', type: 'vertical' },
  { key: 'c', type: 'vertical' },
  { key: 'd', type: 'horizontal' },
  { key: 'e', type: 'vertical' },
  { key: 'f', type: 'vertical' },
  { key: 'g', type: 'horizontal' },
];

export const Module7SegmentsCharset: Charset<Module7SegmentsDataType> = {
  [SpecialChar.EMPTY]: [false, false, false, false, false, false, false],
  '0': [true, true, true, true, true, true, false],
  '1': [false, true, true, false, false, false, false],
  '2': [true, true, false, true, true, false, true],
  '3': [true, true, true, true, false, false, true],
  '4': [false, true, true, false, false, true, true],
  '5': [true, false, true, true, false, true, true],
  '6': [true, false, true, true, true, true, true],
  '7': [true, true, true, false, false, false, false],
  '8': [true, true, true, true, true, true, true],
  '9': [true, true, true, true, false, true, true],
};
