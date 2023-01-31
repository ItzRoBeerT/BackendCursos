const express = require("express");
const Curso = require("../models/Curso");
const router = new express.Router();

router.post("/cursos", async (req, res) => {
  const curso = new Curso(req.body);

  try {
    await curso.save();
    res.send(curso);
  } catch (e) {
    res.send(e);
  }
});

router.get("/cursos", async (req, res) => {
  try {
    const cursos = await Curso.find({});
    res.send(cursos);
  } catch (e) {
    res.send(e);
  }
});

router.get("/cursos/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const curso = await Curso.findById(id);
    if (!curso) return res.send("No se encontro el curso");
    res.send(curso);
  } catch (e) {
    res.send(e);
  }
});

router.patch("/cursos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const curso = await Curso.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!curso) return res.send("No se encontro el curso");
    res.send(curso);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/cursos/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const curso = await Curso.findByIdAndDelete(id);
    if (!curso) res.send("no se encontro el curso");
    res.send(curso);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
