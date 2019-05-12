import React from 'react';
import { mount } from 'enzyme';
import SettingsMenu from './SettingsMenu';

describe('SettingsMenu', () => {
  let props;
  let mountedSettingsMenu;
  const setSettingsMenu = () => {
    if (!mountedSettingsMenu) {
      mountedSettingsMenu = mount(
        <SettingsMenu {...props} />,
      );
    }
    return mountedSettingsMenu.find(SettingsMenu);
  };

  beforeEach(() => {
    props = {
    };
    mountedSettingsMenu = undefined;
  });

  describe('renders without crashing', () => {
    beforeEach(() => {
    });

    it('renders', () => {
      expect(setSettingsMenu().length).toBe(1);
    });
  });
});
