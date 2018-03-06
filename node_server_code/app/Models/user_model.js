const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const Type = require('../../app/constants/userRoles.js')



const userSchema = new mongoose.Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  dob: { type: Date, default: '' },
  user_type: { type: String, enum: Type.roleOfUser, default: 'USER' },
  email: { type: String, unique: true },
  password: { type: String, default: '' },
  phone: { type: Number, default: null },
  gender: { type: String, enum: ['MALE', 'FEMALE'] },
  location: { type: String, default: '' },
  category_id: { type: Schema.Types.ObjectId, ref: 'category' },
  sub_category_id: { type: Schema.Types.ObjectId, ref:'subCategory'},
  user_status: { type: Boolean, default: 'true' },
  userId: { type: Number, unique: true },
  age: { type: Number, default: null },
  instructor_name: { type: String, default: '' },
  batch_schedule: { type: String, default: '' },
  batch_start_date: { type: Date, default: '' },
  address: { type: String, default: '' },
  payment: { type: String, default: '' },
  payment_due_date: { type: Date, default: '' },
  batch_time: { type: String, default: '' },

  // passwordResetToken: String,
  // passwordResetExpires: Date,

  facebook: String,
  twitter: String,
  google: String,
  steam: String,
  tokens: Array,
  profile: {
    name: String,
    gender: String,
    location: String,
    website: String,
    picture: String
  },
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: '' }

}, { timestamps: true });

/**
 * Password hash middleware.
 */





userSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

/**
 * Helper method for getting user's gravatar.
 */
userSchema.methods.gravatar = function gravatar(size) {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

const User = mongoose.model('User', userSchema);

module.exports = User;


module.exports = mongoose.model('user', userSchema, 'user');
