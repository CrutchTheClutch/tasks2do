import React from 'react';
import { shallow } from 'enzyme';
import TaskList from './TaskList';

describe('TaskList', (): void => {
  it('renders without crashing', (): void => {
    const taskList = <TaskList />;
    shallow(taskList);
  });
});
