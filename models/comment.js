const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema ({
  userName: {
    type: String,
    uppercase: true,
    required: [true, "El nombre de usuario es necesario"]
  },
  email: {
    type: String,
    required: [true, "El email es necesario"]
  },
  comment: {
    type: String,
    required: [true, "El comentario es necesario"]
  },
  like: {
    type: Number
  },
  disLike: {
    type: Number
  },
})

module.exports = mongoose.model('Comment', comment)