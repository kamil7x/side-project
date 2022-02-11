import { render } from '@testing-library/react';

import Module5x7Matrix from './module-5x7-matrix';

describe('Module5x7Matrix', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Module5x7Matrix />);
    expect(baseElement).toBeTruthy();
  });
});
