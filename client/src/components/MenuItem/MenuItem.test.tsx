import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from './MenuItem';

describe('CustomButton', (): void => {
  it('renders without crashing', (): void => {
    const menuItem = <MenuItem text="test" />;
    shallow(menuItem);
  });
});
