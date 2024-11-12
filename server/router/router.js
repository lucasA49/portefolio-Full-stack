// router.js
import express from "express";
import db from "../dbConfig.js"; // Vérifie que l'extension .js est incluse

const router = express.Router();

router.get("/projet", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM projet"); // db.query directement, sans .promise() nécessaire
        res.json(rows);
    } catch (err) {
        console.error("Erreur lors de la récupération des données:", err);
        res.status(500).json({
            error: "Erreur lors de la récupération des données",
        });
    }
});

export default router;
