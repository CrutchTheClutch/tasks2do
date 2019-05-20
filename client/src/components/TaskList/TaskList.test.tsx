import React from 'react';
import { shallow } from 'enzyme';
import TaskList from './TaskList';

describe('TaskList', () => {
  it('renders without crashing', () => {
    const taskList = <TaskList/>
    shallow(taskList);
  });
});
