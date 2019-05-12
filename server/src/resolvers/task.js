import { Task } from '../models';

export default {
  Query: {
    tasks: () => {
      return Task.find({});
    },
    task: ({ id }) => {
      return Task.findById(id);
    },
  },
  Mutation: {
    createTask: (parent, { name, dueDate }, context, info) => {
      if (!context.isAuth) {
        throw new Error('Unauthenticated!');
      }

       const newTask = ({
        name,
        dueDate,
        assignedTo: context.userId,
      });

      return Task.create(newTask);
    },
  }
};
