import express from 'express';
import dotenv from 'dotenv';
import route from './router/router.js';
import dbConfig from './dbConfig.js';
import cors from 'cors';

// Charger les variables d'environnement
dotenv.config();

const app = express();
const port = 3000;

// Configurer CORS et JSON parser
app.use(cors());
app.use(express.json());

// Configurer la connexion à la base de données (si nécessaire)
dbConfig(); // Si vous avez une fonction de configuration DB

// Définir les routes
app.use('/api', route); // Toutes les routes commencent par /api

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
