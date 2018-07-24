const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, default: '新用户' },
  email: { type: String, default: '', trim: true },
}, {
  timestamps: true
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

const User = mongoose.model('User', UserSchema);

module.exports = User;