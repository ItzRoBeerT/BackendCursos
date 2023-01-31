const mongoose = require("mongoose");

const Curso = mongoose.model("Curso", {
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  puntuacion: {
    type: Number,
    min: [1, "puntuacion muy baja"],
    max: 10,
    default: 1,
    required: true,
  },
});

module.exports = Curso;