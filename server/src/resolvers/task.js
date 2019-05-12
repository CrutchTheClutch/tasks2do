import { Task, User } from '../models';

export default {
  Mutation: {
    createTask: async (parent, { name, dueDate }, context, info) => {
      if (!context.isAuth) {
        throw new Error('Unauthenticated!');
      }

      const newTask = ({
        name,
        dueDate,
        assignedTo: await User.findById(context.userId),
      });

      const task = await Task.create(newTask);

      await User.findOneAndUpdate(context.userId, {
        $push: { tasks: task }
      })

      return task;
    },

    deleteTask: async (parent, { id }, context, info) => {
      if (!context.isAuth) {
        throw new Error('Unauthenticated!');
      }

      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        throw new Error('Task not found.');
      }

      await User.findOneAndUpdate(context.userId, {
        $pull: { tasks: id }
      })

      return task;
    },
  },
};
