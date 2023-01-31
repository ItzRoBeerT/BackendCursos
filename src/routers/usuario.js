const express = require("express");
const Usuario = require("../models/usuario");
const router = new express.Router();

router.post("/usuarios", async (req, res) => {
  const usuario = new Usuario(req.body);

  try {
    await usuario.save();
    res.send(usuario);
  } catch (error) {
    res.send(error);
  }
});

router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    res.send(usuarios);
  } catch (e) {
    res.send(e);
  }
});

router.get("/usuarios/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const usuario = await Usuario.findById(id);
    if (!usuario) return res.send("No se ha podido encontrar el usuario");
    res.send(usuario);
  } catch (e) {
    res.send(e);
  }
});

router.patch("/usuarios/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!usuario) return res.send("No se pudo actualizar el usuario");
    res.send(usuario);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/usuarios/:id", async (req, res) => {
  try {
    const usuario = Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) return res.send("No se encontro ningun usuario");
    res.send(usuario);
  } catch (e) {}
});

module.exports = router;