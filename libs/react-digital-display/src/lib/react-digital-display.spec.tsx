import { render } from '@testing-library/react';

import ReactDigitalDisplay from './react-digital-display';

describe('ReactDigitalDisplay', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactDigitalDisplay />);
    expect(baseElement).toBeTruthy();
  });
});
