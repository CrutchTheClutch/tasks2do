import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
  dueDate: {
    type: Date,
    required: false,
  },
}, {
    timestamps: true,
});

export const Task = mongoose.model('Task', taskSchema);
