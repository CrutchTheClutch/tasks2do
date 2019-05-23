import React from 'react';
import { shallow } from 'enzyme';
import SettingsMenu from './SettingsMenu';

describe('SettingsMenu', (): void => {
  it('renders without crashing', (): void => {
    const settingsMenu = <SettingsMenu updateTheme={(): void => {}} />;
    shallow(settingsMenu);
  });
});
