import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  it('renders without crashing', () => {
    const customButton = <CustomButton content={<div>test</div>} />
    shallow(customButton);
  });
});
