import React from 'react';
import { mount } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  let props;
  let mountedNavbar;
  const setNavbar = () => {
    if (!mountedNavbar) {
      mountedNavbar = mount(
        <Navbar {...props} />,
      );
    }
    return mountedNavbar.find(Navbar);
  };

  beforeEach(() => {
    props = {
      nightMode: undefined,
      updateTheme: undefined,
    };
    mountedNavbar = undefined;
  });

  describe('renders without crashing', () => {
    beforeEach(() => {
      props.nightMode = true;
      props.updateTheme = jest.fn();
    });

    it('renders', () => {
      expect(setNavbar().length).toBe(1);
    });

    it('sets the rendered `Navbar`\'s `nightMode` prop', () => {
      const task = setNavbar();
      expect(task.prop('nightMode')).toEqual(props.nightMode);
    });

    it('sets the rendered `Navbar`\'s `updateTheme` prop', () => {
      const task = setNavbar();
      expect(task.prop('updateTheme')).toEqual(props.updateTheme);
    });
  });
});
