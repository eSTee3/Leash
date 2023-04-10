const { AuthenticationError } = require('apollo-server-express');
const { User, Bark } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    user: async (parent, {userId}) => {
      if (context.user) {
        const user = await User.findOne({_id: userId});

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async (parent, args, context) => {
      if (context.user) {
        const users = await User.find({});
        return users;
      }
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    bark: async (parent, { id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user.orders.id(id);
      }

      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    createBark: async (parent, { descripton }, context) => {
      console.log(context);
      if (context.user) {
        const bark = new Bark({ description });

        await User.findByIdAndUpdate(context.user._id, { $push: { barks: bark } });

        return bark;
      }

      throw new AuthenticationError('Not logged in');
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    deleteUser: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    deleteBark: async (parent, { userId, barkId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { barks: barkId } },
        { new: true }
      );
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
