import React from 'react';
import { mount } from 'enzyme';
import Task from './Task';

describe('Task', () => {
  let props;
  let mountedTask;
  const setTask = () => {
    if (!mountedTask) {
      mountedTask = mount(
        <Task {...props} />,
      );
    }
    return mountedTask.find(Task);
  };

  beforeEach(() => {
    props = {
      id: undefined,
      completed: undefined,
      taskName: undefined,
      dueDate: undefined,
    };
    mountedTask = undefined;
  });

  describe('renders without crashing', () => {
    beforeEach(() => {
      props.id = 12345;
      props.completed = false;
      props.taskName = 'some task name';
      props.dueDate = '05/07/2019';
    });

    it('renders', () => {
      expect(setTask().length).toBe(1);
    });

    it('sets the rendered `Tasks`\'s `id` prop', () => {
      const task = setTask();
      expect(task.prop('id')).toEqual(props.id);
    });

    it('sets the rendered `Tasks`\'s `completed` prop', () => {
      const task = setTask();
      expect(task.prop('completed')).toEqual(props.completed);
    });

    it('sets the rendered `Tasks`\'s `taskName` prop', () => {
      const task = setTask();
      expect(task.prop('taskName')).toEqual(props.taskName);
    });

    it('sets the rendered `Tasks`\'s `dueDate` prop', () => {
      const task = setTask();
      expect(task.prop('dueDate')).toEqual(props.dueDate);
    });
  });
});
