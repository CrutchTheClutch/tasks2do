import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema ({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],
}, {
  timestamps: true,
});

export const User = mongoose.model('User', userSchema);
