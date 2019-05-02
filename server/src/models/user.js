import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  email: String,
  username: String,
  name: String,
  password: String,
}, {
  timestamps: true,
});

export default mongoose.model('User', userSchema);
