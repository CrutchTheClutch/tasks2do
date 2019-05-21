import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', (): void => {
  it('renders without crashing', (): void => {
    const navbar = <Navbar loggedIn nightMode updateTheme={(): void => { }} />
    shallow(navbar);
  });
});
