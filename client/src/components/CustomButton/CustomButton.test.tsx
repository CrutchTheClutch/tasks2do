import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from './CustomButton';

describe('CustomButton', (): void => {
  it('renders without crashing', (): void => {
    const customButton = <CustomButton content={<div>test</div>} />;
    shallow(customButton);
  });
});
