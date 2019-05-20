import React from 'react';
import { shallow } from 'enzyme';
import SettingsMenu from './SettingsMenu';

describe('SettingsMenu', () => {
  it('renders without crashing', () => {
    const settingsMenu = <SettingsMenu updateTheme={() => {}} />
    shallow(settingsMenu);
  });
});
