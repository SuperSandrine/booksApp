import express from 'express';
import bodyParser from 'body-parser';
import booksRoutes from './routes/booksRoutes.js'

const app = express();
const port = process.env.PORT || 3000;


// Middleware pour analyser le corps des requêtes en JSON
app.use(bodyParser.json());

// Middleware pour gérer les erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.use(booksRoutes)

// Lancer le serveur
app.listen(port, () => {
  console.log(`Tadaaa ! Serveur en cours d'exécution sur le port ${port}`);
});
