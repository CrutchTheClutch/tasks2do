import { compare, hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { User } from '../models';

export default {
  Query: {
    user: (parent, { id }, context, info) => {
      // TODO: users should not be able to list other's credentials
      return User.findById(id);
    },

    users: (parent, args, context, info) => {
      // TODO: users should not be able to list other's credentials
      return User.find({});
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
        process.env.JWT_KEY,
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
      // if (!context.isAuth || id !== context.userId) {
      //   throw new Error('Unauthenticated!');
      // }

      const user = User.findByIdAndDelete(id);
      if (!user) {
        throw new Error('User not found.');
      }

      return user;
    },
  },
  User: {
    tasks: async (parent, args, context, info) => {
      return (await parent.populate('tasks').execPopulate()).tasks
    }
  },
};
