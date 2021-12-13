import { render } from '@testing-library/react';

import Module7Segments from './module-7-segments';

describe('Module7Segments', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Module7Segments char="0" />);
    expect(baseElement).toBeTruthy();
  });
});
