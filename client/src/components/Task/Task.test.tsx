import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('Task', (): void => {
  it('renders without crashing', (): void => {
    const task = <Task id="12345" completed={false} taskName="testTask" />
    shallow(task);
  });
});
