import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { JWT_KEY } from '../config';
import { User } from '../models';

export default {
  Query: {
    users: (parent, args, context, info) => {
      return User.find({});
    },

    user: (parent, { id }, context, info) => {
      return User.findById(id);
    },

    signIn: async (parent, { email, password }, context, info) => {
      const user = await User.findOne({ email });

      // basic email validation
      if (!user) {
        throw new Error('Invalid email.');
      }

      // basic password validation
      const validPassword = await compare(password, user.password);
      if (!validPassword) {
        throw new Error('Invalid password.');
      }

      // sign JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_KEY,
        {
          expiresIn: '1h'
        }
      );

      return { userId: user.id, token: token };
    },
  },
  Mutation: {
    signUp: async (parent, { email, username, name, password }, context, info) => {
      const emailTaken = await User.findOne({ email });
      const usernameTaken = await User.findOne({ username });

      // basic email validation
      if (emailTaken) {
        throw new Error('Email is already taken.');
      }

      // basic username validation
      if (usernameTaken) {
        throw new Error('Username is already taken.');
      }

      const hashedPassword = await hash(password, 12);

      const newUser = ({
        email,
        username,
        name,
        password: hashedPassword,
      });

      return User.create(newUser);
    },

    deleteUser: async (parent, { id }, context, info) => {
      // ensures user's can only delete thier own account
      if (!context.isAuth || id !== context.userId) {
        throw new Error('Unauthenticated!');
      }

      const user = User.findByIdAndDelete(id);
      if (!user) {
        throw new Error('User not found.');
      }

      return user;
    },
  },
  // User: {
  //   tasks: async (user, args, { req }, info) => {
  //     // TODO: should not be able to list other ppl's tasks
  //     return (await User.populate('tasks').execPopulate()).tasks
  //   }
  // }
};
