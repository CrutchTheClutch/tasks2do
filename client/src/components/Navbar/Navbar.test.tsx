import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const navbar = <Navbar loggedIn={true} nightMode={true} updateTheme={() => {}}/>
    shallow(navbar);
  });
});
