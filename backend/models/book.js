import firebase from 'firebase/compat/app';
import 'firebase/firestore';

// Fonction pour créer une instance de livre
const createBook = (id, title, author, genre, publishDate) => {
  let formattedPublishDate = null;
  if (publishDate instanceof Date) {
    formattedPublishDate = publishDate;
  } else if (publishDate && publishDate._seconds) {
    formattedPublishDate = new Date(publishDate._seconds * 1000);
  }
  
  return {
  id,
  title: title || 'Titre inconnu',
  author: author || 'Auteur inconnu',
  genre: genre || 'Genre inconnu',
  publishDate: formattedPublishDate || null,
}};

// Fonction pour convertir l'objet JavaScript en objet de données Firestore
const bookToFirestore = (book) => {
  //console.log("existe", (book.publishDate));
  const firestoreData = {
    title: book.title,
    author: book.author,
    genre: book.genre,
    // Ajoutez d'autres propriétés selon les besoins de votre application
  };
  // Ajoutez la propriété publishDate uniquement si elle est définie
  if (book.publishDate) {
    firestoreData.publishDate = book.publishDate;
  }
  return firestoreData;
};

// Fonction pour créer une instance de livre à partir des données Firestore
const bookFromFirestore = (id, data) => {
  const { title, author, genre, publishDate } = data;
  return createBook(id, title, author, genre, publishDate ? publishDate.toDate() : null);
};

export { createBook, bookToFirestore, bookFromFirestore };
