import { shallow } from 'enzyme';
import * as React from 'react';
import Footer from './Footer';

describe('Footer', (): void => {
  it('renders without crashing', (): void => {
    const footer = <Footer />;
    shallow(footer);
  });
});
