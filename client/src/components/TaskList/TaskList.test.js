import React from 'react';
import { mount } from 'enzyme';
import TaskList from './TaskList';

describe('TaskList', () => {
  let props;
  let mountedTaskList;
  const setTaskList = () => {
    if (!mountedTaskList) {
      mountedTaskList = mount(
        <TaskList {...props} />,
      );
    }
    return mountedTaskList.find(TaskList);
  };

  beforeEach(() => {
    props = {
    };
    mountedTaskList = undefined;
  });

  describe('renders without crashing', () => {
    beforeEach(() => {

    });

    it('renders', () => {
      expect(setTaskList().length).toBe(1);
    });
  });
});
