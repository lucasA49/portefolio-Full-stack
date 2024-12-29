// router.js
import express from "express";
import db from "../dbConfig.js"; // Connexion à la base de données

const router = express.Router();

// Récupérer tous les projets
router.get("/projet", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM projets");
    res.json(rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Ajouter un nouveau projet
router.post("/projet", async (req, res) => {
  const { nom, description } = req.body;
  try {
    const [result] = await db.query("INSERT INTO projets (nom, description) VALUES (?, ?)", [nom, description]);
    res.status(201).json({ id: result.insertId, nom, description });
  } catch (error) {
    console.error("Erreur lors de l'ajout du projet:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
