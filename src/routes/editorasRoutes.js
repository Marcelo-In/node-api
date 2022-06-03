import express from "express";
import editorasController from "../controllers/editorasController.js";

const router = express.Router();

router
  .get("/editoras", editorasController.listarEditoras)
  .get("/editoras/:id", editorasController.listarEditoraPorId)
  .post("/editoras", editorasController.cadastrarEditora)
  .put("/editoras/:id", editorasController.atualizarEditora)
  .delete("/editoras/:id", editorasController.excluirEditora);

export default router;