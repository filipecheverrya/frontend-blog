import { screen, render } from '@testing-library/react';

import Home from '@/pages/index';

const setup = () => {
  const utils = render(<Home />);
  const components = {
    inputEmail: utils.queryAllByLabelText('email'),
  }
  return { components, ...utils };
}

describe('Home', () => {
  it('Should render input email', () => {
    const utils = setup();
    const { inputEmail } = utils.components;

    expect(inputEmail).toHaveFocus();
  })
});
