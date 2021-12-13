import './react-digital-display.module.scss';

import { DisplayModule, UnknownCharacterMode } from './types';

export interface ReactDigitalDisplayProps {
  text: string | string[];
  module: DisplayModule<unknown>;
  size: number;
  height?: number;
  unknownCharacterMode?: UnknownCharacterMode;
}

export function ReactDigitalDisplay(props: ReactDigitalDisplayProps) {
  return (
    <div>
      <h1>Welcome to ReactDigitalDisplay!</h1>
    </div>
  );
}

export default ReactDigitalDisplay;
