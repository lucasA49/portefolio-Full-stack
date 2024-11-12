// dbConfig.js
import { fileURLToPath } from "url";
import { dirname } from "path";
import { config } from "dotenv";
import mysql from "mysql2/promise"; // Remplace par mysql2/promise pour activer les promesses

// Obtenir le chemin absolu du fichier .env
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Charger les variables d'environnement depuis .env
config({ path: `${__dirname}/.env` });

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123soleil",
  database: "projet",
  port: 3306,
});

export default db;
