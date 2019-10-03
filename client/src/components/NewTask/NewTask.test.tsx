import { shallow } from 'enzyme';
import * as React from 'react';
import NewTask from './NewTask';

describe('Footer', (): void => {
  it('renders without crashing', (): void => {
    const newTask = <NewTask />;
    shallow(newTask);
  });
});
