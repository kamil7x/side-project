import {
  Module5x7Matrix,
  Module7Segments,
  ReactDigitalDisplay,
} from 'react-digital-display';

import styles from './app.module.scss';

const TEXT = '9BB901';
const MODULE = Module7Segments;
const SIZE = 6;
// const HEIGHT = 160;
const HEIGHT = undefined;

export function App() {
  return (
    <div className={styles.container}>
      <ReactDigitalDisplay
        text={TEXT}
        module={Module5x7Matrix}
        size={SIZE}
        height={HEIGHT}
        unknownCharacterMode="empty"
      />
    </div>
  );
}

export default App;
