const mongoose = require("mongoose");

const Usuario = mongoose.model("Usuario", {
  nombre: {
    type: String,
    required: [true, "no tienes nombre?"],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
  },
});

module.exports = Usuario;
