import express from 'express';
import {  getAllBooks,
  getBookById,
  createBookControl,
  updateBook,
  deleteBook } from '../controllers/booksControllers.js';

const router = express.Router();

// Exemple de route pour obtenir tous les livres
router.get('/api/books', getAllBooks);

// Exemple de route pour obtenir un livre par ID
router.get('/api/books/:id', getBookById);

// Exemple de route pour créer un nouveau livre
router.post('/api/books', createBookControl);

// Exemple de route pour mettre à jour un livre par ID
router.put('/api/books/:id', updateBook);

// Exemple de route pour supprimer un livre par ID
router.delete('/api/books/:id', deleteBook);

export default router;
