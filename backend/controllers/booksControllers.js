//const admin = require('firebase-admin');
import { firestore } from '../config/firebase.js';
import { createBook, bookToFirestore, bookFromFirestore} from '../models/book.js'

// Exemple de contrôleur pour obtenir tous les livres
export const getAllBooks = async (req, res) => {
  try {
    const snapshot = await firestore.collection('books').get();
    const books = snapshot.docs.map(doc =>
      {
        const data = doc.data();
        return createBook(doc.id, data.title, data.author, data.genre, data.publishDate);
      });
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la récupération des livres');
  }
};

// Exemple de contrôleur pour obtenir un livre par ID
export const getBookById = async (req, res) => {
  const bookId = req.params.id;
  try {
    const bookDoc = await firestore.collection('books').doc(bookId).get();
    if (!bookDoc.exists) {
      res.status(404).send('Livre non trouvé');
      return;
    }
    const bookData = bookDoc.data();
    const book = bookFromFirestore(bookId, bookData);
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la récupération du livre');
  }
};

// Exemple de contrôleur pour créer un nouveau livre
export const createBookControl = async (req, res) => {
  const newBookData = req.body;
  const newBook = createBook(undefined, newBookData.title, newBookData.author, newBookData.genre, newBookData.publishDate);
  try {
    const firestoreBook = bookToFirestore(newBook);
    const docRef = await firestore.collection('books').add(firestoreBook);

    res.json({ id: docRef.id, ...newBook });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la création du livre');
  }
};

// Exemple de contrôleur pour mettre à jour un livre par ID
export const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const updatedBookData = req.body;
  try {
    const bookDocRef = firestore.collection('books').doc(bookId);
    const currentBookDoc = await bookDocRef.get();

    if (!currentBookDoc.exists) {
      res.status(404).send('Livre non trouvé');
      return;
    }

    // Récupérer les données actuelles du livre dans Firestore
    const currentBookData = currentBookDoc.data();

    // Construire l'objet de mise à jour en fusionnant les données actuelles et les nouvelles données
    const updatedBook = {
      ...currentBookData,
      ...updatedBookData,
    };

    // Mettre à jour le livre dans Firestore
    await bookDocRef.update(updatedBook);

    res.json({ id: bookId, ...updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la mise à jour du livre');
  }
};

// Exemple de contrôleur pour supprimer un livre par ID
export const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    await firestore.collection('books').doc(bookId).delete();
    res.json({ id: bookId, message: 'Livre supprimé avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur lors de la suppression du livre');
  }
};
