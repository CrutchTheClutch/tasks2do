import React from 'react';
import { mount } from 'enzyme';
import CustomButton from './CustomButton';

describe('CustomButton', () => {
  let props;
  let mountedCustomButton;
  const setCustomButton = () => {
    if (!mountedCustomButton) {
      mountedCustomButton = mount(
        <CustomButton {...props} />,
      );
    }
    return mountedCustomButton.find(CustomButton);
  };

  beforeEach(() => {
    props = {
      className: undefined,
      content: undefined,
    };
    mountedCustomButton = undefined;
  });

  describe('renders without crashing', () => {
    beforeEach(() => {
      props.className = 'transparentButton';
      props.content = <div>Some Object/Element</div>;
    });

    it('renders', () => {
      expect(setCustomButton().length).toBe(1);
    });

    it('sets the rendered `CustomButton`\'s `className` prop', () => {
      const customButton = setCustomButton();
      expect(customButton.prop('className')).toEqual(props.className);
    });

    it('sets the rendered `CustomButton`\'s `completed` prop', () => {
      const customButton = setCustomButton();
      expect(customButton.prop('completed')).toEqual(props.completed);
    });
  });
});
