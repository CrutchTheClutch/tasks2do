import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('Task', () => {
  it('renders without crashing', () => {
    const task = <Task id="12345" completed={false} taskName="testTask"/>
    shallow(task);
  });
});
